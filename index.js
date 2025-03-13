'use strict';
// 从配置文件中读取图标样式设置
const hexoTipsConfig = hexo.config.hexo_tips || {};

// 创建缓存映射
const tipsCache = new Map();
const originalContents = new Map();

// 步骤1: 在Markdown渲染前拦截和预处理
hexo.extend.filter.register('before_post_render', data => {
    // 保存原始内容
    originalContents.set(data.source, data.content);
    
    // 检查是否包含提示框语法
    if (!data.content.includes(':::')) {
        tipsCache.set(data.source, false);
        data.hexo_tips = false;
        return data;
    }
    
    // 检查是否使用了配置中定义的提示框类型
    const hasTipsContent = Object.keys(hexoTipsConfig).some(type => {
        const pattern = `:::${type}`;
        return data.content.includes(pattern);
    });
    
    tipsCache.set(data.source, hasTipsContent);
    data.hexo_tips = hasTipsContent;
    
    // if (hasTipsContent) {
    //     // 为摘要和描述生成纯文本版本 - 移除提示框语法但保留内容
    //     let cleanText = data.content;
    //     Object.keys(hexoTipsConfig).forEach(type => {
    //         const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
    //         cleanText = cleanText.replace(regex, '$1');
    //     });
        
    //     // 设置临时变量用于摘要和描述生成
    //     data._cleanContent = cleanText;
        
    //     // 修改description生成机制
    //     if (!data.description) {
    //         data.description = cleanText.substring(0, 200).trim();
    //     }
        
    //     // 修改excerpt生成机制
    //     const config = hexo.config;
    //     if (!data.excerpt) {
    //         const excerptLength = config.excerpt_length || 200;
    //         data.excerpt = cleanText.substring(0, excerptLength).trim();
    //     }
    // }
    
    return data;
}, -10000); // 最高优先级

// 步骤2: 将markdown内容恢复回原始格式(带提示框语法)，供后续渲染提示框
hexo.extend.filter.register('before_post_render', data => {
    if (!data.hexo_tips) return data;
    
    // 恢复原始内容供渲染提示框
    const originalContent = originalContents.get(data.source);
    if (originalContent) {
        data.content = originalContent;
    }
    
    return data;
}, -5000); // 在Markdown渲染前恢复原始内容

// 步骤3: 处理HTML渲染，将提示框语法转换为HTML - 只在body标签内进行处理
hexo.extend.filter.register('after_render:html', str => {
    if (!str.includes(':::')) return str;
    
    // 分析HTML结构，只处理body内容
    const bodyStartMatch = str.match(/<body[^>]*>/i);
    const bodyEndMatch = str.match(/<\/body>/i);
    
    if (!bodyStartMatch || !bodyEndMatch) return str; // 没找到body标签，返回原始内容
    
    const bodyStartIndex = bodyStartMatch.index + bodyStartMatch[0].length;
    const bodyEndIndex = bodyEndMatch.index;
    
    // 提取页面的三个部分
    const beforeBody = str.substring(0, bodyStartIndex);
    let bodyContent = str.substring(bodyStartIndex, bodyEndIndex);
    const afterBody = str.substring(bodyEndIndex);
    
    // 只处理body内容中的提示框语法
    if (bodyContent.includes(':::')) {
        Object.keys(hexoTipsConfig).forEach(type => {
            const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
            
            bodyContent = bodyContent.replace(regex, (match, content) => {
                const processedContent = hexo.render.renderSync({ text: content, engine: 'markdown' });
                const tipConfig = hexoTipsConfig[type];
                const icon = tipConfig.icon;
                const styleClass = `tips-style-${type}`;
                
                return `<div class="hexo-tips-layout hexo-tips-${type} ${styleClass}"><div class="icon">${icon}</div><div class="content">${processedContent}</div></div>`;
            });
        });
    }
    
    // 重新组合页面
    return beforeBody + bodyContent + afterBody;
}, 100);

// 最终安全检查 - 确保meta标签内容干净
hexo.extend.filter.register('after_render:html', html => {
    if (!html.includes('<meta')) return html;
    
    // 只清理meta标签内容，不做渲染
    return html.replace(/<meta\s+([^>]*content=["'])(.*?)(['"][^>]*)>/gi, (match, prefix, content, suffix) => {
        // 只处理包含提示框语法或HTML标签的内容
        if (!content.includes(':::') && !content.includes('<')) return match;
        
        // 简单移除提示框语法
        let cleanContent = content;
        Object.keys(hexoTipsConfig).forEach(type => {
            const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
            cleanContent = cleanContent.replace(regex, '$1');
        });
        
        // 移除HTML标签
        cleanContent = cleanContent.replace(/<[^>]*>/g, '');
        cleanContent = cleanContent.replace(/[<>]/g, '');
        
        return `<meta ${prefix}${cleanContent}${suffix}>`;
    });
}, 9999);

// 注入基础布局CSS样式和动态生成的样式规则
hexo.extend.injector.register('head_end', () => {
    const path = require('path');
    const fs = require('fs');
    const cssPath = path.join(__dirname, 'hexo-tips.css');
    let cssContent = fs.readFileSync(cssPath, 'utf8');

    // 动态生成样式规则
    Object.keys(hexoTipsConfig).forEach(type => {
        const style = hexoTipsConfig[type].style || {};
        const styleClass = `tips-style-${type}`;
        const styleRules = `
            .${styleClass} {
                --tips-light-bg: ${style.light?.background || '#fff'};
                --tips-dark-bg: ${style.dark?.background || '#333'};
                --tips-border: ${style.border || '#000'};
            }
        `;
        cssContent += styleRules;
    });

    return `<style>${cssContent}</style>`;
});


