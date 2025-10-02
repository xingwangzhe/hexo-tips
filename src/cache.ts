import { CacheManager } from './types';

export class TipsCacheManager implements CacheManager {
  private cache: Map<string, boolean> = new Map();
  private originalContents: Map<string, string> = new Map();

  set(key: string, value: boolean): void {
    this.cache.set(key, value);
  }

  get(key: string): boolean | undefined {
    return this.cache.get(key);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
    this.originalContents.clear();
  }

  setOriginalContent(key: string, content: string): void {
    this.originalContents.set(key, content);
  }

  getOriginalContent(key: string): string | undefined {
    return this.originalContents.get(key);
  }

  hasOriginalContent(key: string): boolean {
    return this.originalContents.has(key);
  }
}