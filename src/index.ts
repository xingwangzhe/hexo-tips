import { Hexo, PostData, HexoTipsConfig } from './types';
import { TipsCacheManager } from './cache';
import { TipsContentProcessor } from './content-processor';
import { HexoTipsProcessor } from './tip-processor';
import { defaultConfig } from './config';

declare const hexo: Hexo;

// 从配置文件中读取图标样式设置
const hexoTipsConfig: HexoTipsConfig = hexo.config.hexo_tips || defaultConfig;

// 创建实例
const cacheManager = new TipsCacheManager();
const contentProcessor = new TipsContentProcessor();
const tipProcessor = new HexoTipsProcessor();

// 步骤1: 在Markdown渲染前拦截和预处理
hexo.extend.filter.register('before_post_render', (data: PostData) => {
    // 保存原始内容
    cacheManager.setOriginalContent(data.source, data.content);
    
    // 检查是否包含提示框语法
    if (!data.content.includes(':::')) {
        cacheManager.set(data.source, false);
        data.hexo_tips = false;
        return data;
    }
    
    // 检查是否使用了配置中定义的提示框类型
    const hasTipsContent = contentProcessor.extractTipsContent(data.content, hexoTipsConfig);
    
    cacheManager.set(data.source, hasTipsContent);
    data.hexo_tips = hasTipsContent;
    
    return data;
}, -10000); // 最高优先级

// 步骤2: 将markdown内容恢复回原始格式(带提示框语法)，供后续渲染提示框
hexo.extend.filter.register('before_post_render', (data: PostData) => {
    if (!data.hexo_tips) return data;
    
    // 恢复原始内容供渲染提示框
    const originalContent = cacheManager.getOriginalContent(data.source);
    if (originalContent) {
        data.content = originalContent;
    }
    
    return data;
}, -5000); // 在Markdown渲染前恢复原始内容

// 步骤3: 处理HTML渲染，将提示框语法转换为HTML - 只在body标签内进行处理
hexo.extend.filter.register('after_render:html', (str: string) => {
    if (!str.includes(':::')) return str;
    
    // 分析HTML结构，只处理body内容
    const bodyParts = contentProcessor.extractBodyParts(str);
    
    if (!bodyParts) return str; // 没找到body标签，返回原始内容
    
    // 只处理body内容中的提示框语法
    let processedBodyContent = bodyParts.bodyContent;
    if (processedBodyContent.includes(':::')) {
        processedBodyContent = contentProcessor.processBodyContent(
            processedBodyContent, 
            hexoTipsConfig, 
            hexo
        );
    }
    
    // 重新组合页面
    return bodyParts.beforeBody + processedBodyContent + bodyParts.afterBody;
}, 100);

// 最终安全检查 - 确保meta标签内容干净
hexo.extend.filter.register('after_render:html', (html: string) => {
    return tipProcessor.cleanMetaTags(html, hexoTipsConfig);
}, 9999);

// 注入基础布局CSS样式和动态生成的样式规则
hexo.extend.injector.register('head_end', () => {
    const cssContent = tipProcessor.generateStyles(hexoTipsConfig);
    return `<style>${cssContent}</style>`;
});