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

    // 使用 hexo 内置的 markdown 渲染器
    hexo.extend.filter.register('after_render:html', str => {
        // 处理所有类型的提示
        Object.keys(ICONS).forEach(type => {
            const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
            str = str.replace(regex, (_, content) => {
                const processedContent = hexo.render.renderSync({ text: content, engine: 'markdown' });
                return `<div class="hexo-tips-layout hexo-tips-${type}">
                    <div class="icon">${ICONS[type]}</div>
                    <div class="content">${processedContent}</div>
                </div>`;
            });
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


