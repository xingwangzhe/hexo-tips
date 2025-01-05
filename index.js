'use strict';
    // 定义不同类型的图标
    const ICONS = {
        warning: '⚠',
        danger: '⛔',
        tip: '💡',
        mention: '💬',
        recommend: '👍',
        note: '📝',
        info: 'ℹ️',
        success: '✅',
        error: '❌',
        bug: '🐛',
        todo: '📋',
        example: '🔍',
        quote: '💭',
        link: '🔗',
        code: '💻',
        update: '🔄',
        star: '⭐',
        time: '⌛'
    };

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
        const hasTipsContent = Object.keys(ICONS).some(type => {
            const pattern = `:::${type}`;
            return data.content.includes(pattern);
        });

        // 存入缓存并设置标记
        tipsCache.set(data.source, hasTipsContent);
        data.hexo_tips = hasTipsContent;
    });

    hexo.extend.filter.register('after_render:html', str => {
        // 快速检查是否需要处理
        if (!str.includes(':::')) {
            return str;
        }

        // 处理所有类型的提示
        Object.keys(ICONS).forEach(type => {
            const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
            if (regex.test(str)) {  // 只有匹配到才进行替换
                str = str.replace(regex, (_, content) => {
                    const processedContent = hexo.render.renderSync({ text: content, engine: 'markdown' });
                    return `<div class="hexo-tips-layout hexo-tips-${type}">
                        <div class="icon">${ICONS[type]}</div>
                        <div class="content">${processedContent}</div>
                    </div>`;
                });
            }
        });
        return str;
    });

    const path = require('path');
    const fs = require('fs');
    const cssPath = path.join(__dirname, 'hexo-tips.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    // 注入 CSS 样式
    hexo.extend.injector.register('head_end', () => {
        return `<style> ${cssContent} </style>`;
    },'post');


