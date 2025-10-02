import { TipProcessor, HexoTipsConfig } from './types';
import * as path from 'path';
import * as fs from 'fs';

export class HexoTipsProcessor implements TipProcessor {
  processContent(content: string, config: HexoTipsConfig): string {
    if (!content.includes(':::')) {
      return content;
    }

    let processedContent = content;

    Object.keys(config).forEach(type => {
      const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
      
      processedContent = processedContent.replace(regex, (match, innerContent) => {
        const tipConfig = config[type as keyof HexoTipsConfig];
        if (!tipConfig) return match;
        
        const icon = tipConfig.icon;
        const styleClass = `tips-style-${type}`;
        
        return `<div class="hexo-tips-layout hexo-tips-${type} ${styleClass}"><div class="icon">${icon}</div><div class="content">${innerContent}</div></div>`;
      });
    });

    return processedContent;
  }

  generateStyles(config: HexoTipsConfig): string {
    const cssPath = path.join(__dirname, '..', 'hexo-tips.css');
    let cssContent = '';
    
    try {
      cssContent = fs.readFileSync(cssPath, 'utf8');
    } catch (error) {
      console.warn('Could not read hexo-tips.css file:', error);
    }

    // 动态生成样式规则
    Object.keys(config).forEach(type => {
      const tipConfig = config[type as keyof HexoTipsConfig];
      if (!tipConfig) return;
      
      const style = tipConfig.style;
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

    return cssContent;
  }

  cleanMetaTags(html: string, config: HexoTipsConfig): string {
    if (!html.includes('<meta')) {
      return html;
    }
    
    return html.replace(/<meta\s+([^>]*content=["'])(.*?)(['"][^>]*)>/gi, (match, prefix, content, suffix) => {
      // 只处理包含提示框语法或HTML标签的内容
      if (!content.includes(':::') && !content.includes('<')) {
        return match;
      }
      
      // 简单移除提示框语法
      let cleanContent = content;
      Object.keys(config).forEach(type => {
        const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
        cleanContent = cleanContent.replace(regex, '$1');
      });
      
      // 移除HTML标签
      cleanContent = cleanContent.replace(/<[^>]*>/g, '');
      cleanContent = cleanContent.replace(/[<>]/g, '');
      
      return `<meta ${prefix}${cleanContent}${suffix}>`;
    });
  }
}