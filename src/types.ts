// Hexo 相关类型定义
export interface HexoConfig {
  [key: string]: any;
}

export interface Hexo {
  config: HexoConfig & {
    hexo_tips?: HexoTipsConfig;
  };
  extend: {
    filter: {
      register(type: string, fn: Function, priority?: number): void;
    };
    injector: {
      register(position: string, fn: Function): void;
    };
  };
  render: {
    renderSync(options: { text: string; engine: string }): string;
  };
}

export interface LocalsType {
  hexo_tips?: boolean;
  _cleanContent?: string;
}

export interface TipStyle {
  border: string;
  light?: {
    background: string;
  };
  dark?: {
    background: string;
  };
}

export interface TipConfig {
  icon: string;
  style: TipStyle;
}

export type TipType = 
  | 'warning' 
  | 'danger' 
  | 'tip' 
  | 'mention' 
  | 'recommend' 
  | 'note' 
  | 'info' 
  | 'success' 
  | 'error' 
  | 'bug' 
  | 'todo' 
  | 'example' 
  | 'quote' 
  | 'link' 
  | 'code' 
  | 'update' 
  | 'star' 
  | 'time'
  | 'critical'
  | 'important'
  | 'caution'
  | 'highlight'
  | 'reference'
  | 'summary'
  | 'detail'
  | 'formula'
  | 'question'
  | 'answer';

export type HexoTipsConfig = Partial<Record<TipType, TipConfig>>;

export interface PostData {
  source: string;
  content: string;
  description?: string;
  excerpt?: string;
  hexo_tips?: boolean;
  _cleanContent?: string;
}

export interface FilterContext {
  (data: PostData): PostData;
}

export interface HtmlFilterContext {
  (html: string): string;
}

export interface InjectorContext {
  (): string;
}

export interface TipProcessor {
  processContent(content: string, config: HexoTipsConfig): string;
  generateStyles(config: HexoTipsConfig): string;
  cleanMetaTags(html: string, config: HexoTipsConfig): string;
}

export interface CacheManager {
  set(key: string, value: boolean): void;
  get(key: string): boolean | undefined;
  has(key: string): boolean;
  clear(): void;
}

export interface ContentProcessor {
  extractTipsContent(content: string, config: HexoTipsConfig): boolean;
  generateCleanContent(content: string, config: HexoTipsConfig): string;
  processBodyContent(bodyContent: string, config: HexoTipsConfig, hexo: Hexo): string;
}