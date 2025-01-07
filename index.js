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

hexo.extend.filter.register('after_render:html', str => {
    if (!str.includes(':::')) return str;

    Object.keys(hexoTipsConfig).forEach(type => {
        const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
        if (regex.test(str)) {
            str = str.replace(regex, (_, content) => {
                const processedContent = hexo.render.renderSync({ text: content, engine: 'markdown' });
                const tipConfig = hexoTipsConfig[type];
                const icon = tipConfig.icon;
                const style = tipConfig.style || {};
                
                // 构建样式优先级链
                const themeStyles = `
                    /* 1. 手动暗色模式优先 */
                    html.dark .hexo-tips-${type} {
                        background-color: ${style.dark?.background};
                    }
                    /* 2. 系统暗色模式其次 */
                    @media (prefers-color-scheme: dark) {
                        html:not(.light) .hexo-tips-${type} {
                            background-color: ${style.dark?.background};
                        }
                    }
                    /* 3. 亮色模式最后 */
                    html:not(.dark) .hexo-tips-${type},
                    html.light .hexo-tips-${type} {
                        background-color: ${style.light?.background};
                    }
                `;

                // 基础样式(不变的部分)
                const baseStyle = `
                    border-color: ${style.border};
                    color: inherit;
                `;

                return `
                    <style>${themeStyles}</style>
                    <div class="hexo-tips-layout hexo-tips-${type}" style="${baseStyle}">
                        <div class="icon" style="color: ${style.border}">${icon}</div>
                        <div class="content">${processedContent}</div>
                    </div>
                `;
            });
        }
    });
    return str;
});

// 注入基础布局CSS样式
hexo.extend.injector.register('head_end', () => {
    const path = require('path');
    const fs = require('fs');
    const cssPath = path.join(__dirname, 'hexo-tips.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    return `<style>${cssContent}</style>`;
}, 'post');


