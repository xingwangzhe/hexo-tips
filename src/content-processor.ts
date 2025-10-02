import { ContentProcessor, HexoTipsConfig, Hexo } from './types';

export class TipsContentProcessor implements ContentProcessor {
  extractTipsContent(content: string, config: HexoTipsConfig): boolean {
    if (!content.includes(':::')) {
      return false;
    }

    return Object.keys(config).some(type => {
      const pattern = `:::${type}`;
      return content.includes(pattern);
    });
  }

  generateCleanContent(content: string, config: HexoTipsConfig): string {
    let cleanText = content;
    
    Object.keys(config).forEach(type => {
      const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
      cleanText = cleanText.replace(regex, '$1');
    });

    return cleanText;
  }

  processBodyContent(bodyContent: string, config: HexoTipsConfig, hexo: Hexo): string {
    if (!bodyContent.includes(':::')) {
      return bodyContent;
    }

    let processedContent = bodyContent;

    Object.keys(config).forEach(type => {
      const regex = new RegExp(`:::\\s*${type}([\\s\\S]*?):::`, 'g');
      
      processedContent = processedContent.replace(regex, (match, content) => {
        const processedInnerContent = hexo.render.renderSync({ 
          text: content, 
          engine: 'markdown' 
        });
        
        const tipConfig = config[type as keyof HexoTipsConfig];
        if (!tipConfig) return match;
        
        const icon = tipConfig.icon;
        const styleClass = `tips-style-${type}`;
        
        return `<div class="hexo-tips-layout hexo-tips-${type} ${styleClass}"><div class="icon">${icon}</div><div class="content">${processedInnerContent}</div></div>`;
      });
    });

    return processedContent;
  }

  extractBodyParts(html: string): { beforeBody: string; bodyContent: string; afterBody: string } | null {
    const bodyStartMatch = html.match(/<body[^>]*>/i);
    const bodyEndMatch = html.match(/<\/body>/i);
    
    if (!bodyStartMatch || !bodyEndMatch) {
      return null;
    }
    
    const bodyStartIndex = bodyStartMatch.index! + bodyStartMatch[0].length;
    const bodyEndIndex = bodyEndMatch.index!;
    
    return {
      beforeBody: html.substring(0, bodyStartIndex),
      bodyContent: html.substring(bodyStartIndex, bodyEndIndex),
      afterBody: html.substring(bodyEndIndex)
    };
  }
}