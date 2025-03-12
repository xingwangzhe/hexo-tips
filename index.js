'use strict';
// 从配置文件中读取图标样式设置
const hexoTipsConfig = hexo.config.hexo_tips || {};

// 创建文章缓存Map
const tipsCache = new Map();

// 在文章渲染前检查和设置 hexo_tips 标记
hexo.extend.filter.register('before_post_render', data => {
    // 检查缓存中是否已有结果
    if (tipsCache.has(data.source)) {
        data.hexo_tips = tipsCache.get(data.source);
        return;
    }

    // 快速检查是否包含基本语法
    if (!data.content.includes(':::')) {
        tipsCache.set(data.source, false);
        data.hexo_tips = false;
        return;
    }

    // 只在首次渲染时进行完整检查
    const hasTipsContent = Object.keys(hexoTipsConfig).some(type => {
        const pattern = `:::${type}`;
        return data.content.includes(pattern);
    });

    // 存入缓存并设置标记
    tipsCache.set(data.source, hasTipsContent);
    data.hexo_tips = hasTipsContent;
});

// 在页面生成阶段为不同类型的页面添加标记
hexo.extend.filter.register('template_locals', locals => {
    if (!locals.page) return locals;
    
    // 标记页面类型
    if (locals.is_post) {
        locals.page.is_post_page = true;
    } else if (locals.is_home) {
        locals.page.is_home_page = true;
    } else if (locals.is_archive) {
        locals.page.is_archive_page = true;
    } else if (locals.is_category) {
        locals.page.is_category_page = true;
    } else if (locals.is_tag) {
        locals.page.is_tag_page = true;
    } else {
        locals.page.is_other_page = true;
    }
    
    return locals;
});

hexo.extend.filter.register('after_render:html', function(str, data) {
    if (!str.includes(':::')) return str;
    
    let processed = str;
    let isPostPage = false;
    
    // 检查页面类型，优先使用data参数
    if (data && data.page) {
        isPostPage = data.page.is_post || data.page.is_post_page;
    } else {
        // 如果没有data参数，尝试从HTML中查找注入的标记
        isPostPage = str.includes('data-page-type="post"') || 
                     /<body[^>]*class="[^"]*post[^"]*"/.test(str);
    }
    
    Object.keys(hexoTipsConfig).forEach(type => {
        const regex = new RegExp(`:::\\s*${type}\\s*([\\s\\S]*?)\\s*:::`, 'g');
        
        if (isPostPage) {
            // 对于文章页面，在body标签内搜索并替换
            const bodyMatch = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(str);
            if (bodyMatch && bodyMatch[1].includes(`:::${type}`)) {
                const bodyContent = bodyMatch[0];
                const bodyStartIndex = processed.indexOf(bodyContent);
                const bodyEndIndex = bodyStartIndex + bodyContent.length;
                
                const beforeBody = processed.substring(0, bodyStartIndex);
                let newBodyContent = bodyContent;
                const afterBody = processed.substring(bodyEndIndex);
                
                newBodyContent = newBodyContent.replace(regex, (_, content) => {
                    const processedContent = hexo.render.renderSync({ text: content.trim(), engine: 'markdown' });
                    const tipConfig = hexoTipsConfig[type];
                    const icon = tipConfig.icon || '';
                    
                    const styleClass = `tips-style-${type}`;
                    
                    return `
                        <div class="hexo-tips-layout hexo-tips-${type} ${styleClass}">
                            <div class="icon">${icon}</div>
                            <div class="content">${processedContent}</div>
                        </div>
                    `;
                });
                
                processed = beforeBody + newBodyContent + afterBody;
            }
        } else {
            // 非文章页面直接在整个HTML中替换
            if (regex.test(processed)) {
                processed = processed.replace(regex, (_, content) => {
                    const processedContent = hexo.render.renderSync({ text: content.trim(), engine: 'markdown' });
                    const tipConfig = hexoTipsConfig[type];
                    const icon = tipConfig.icon || '';
                    
                    const styleClass = `tips-style-${type}`;
                    
                    return `
                        <div class="hexo-tips-layout hexo-tips-${type} ${styleClass}">
                            <div class="icon">${icon}</div>
                            <div class="content">${processedContent}</div>
                        </div>
                    `;
                });
            }
        }
    });
    
    return processed;
}, 1); // 调整优先级为10，确保在meta标签渲染之后执行

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
},);


