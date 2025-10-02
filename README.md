[English](README_EN.md)
# hexo-tips

更便捷地使用小贴士

## 特性

- 🎯 **TypeScript 支持**: 完全使用 TypeScript 重写，提供完整的类型定义
- 🎨 **丰富的样式**: 支持 30+ 种不同类型的提示框
- 🌓 **暗色模式**: 自动适应亮色/暗色主题
- 📱 **响应式设计**: 完美适配移动端设备
- ⚡ **高性能**: 优化的渲染机制，不影响页面加载速度
- 🔧 **高度可定制**: 支持自定义图标、颜色和样式

## 安装

```bash
# 使用 npm
npm install hexo-tips

# 使用 yarn
yarn add hexo-tips

# 使用 bun
bun add hexo-tips
```

## 配置

你可以根据需要增添改删样式。hexo-tips 现在支持 30+ 种提示框类型：

### 基础类型
- `warning` ⚠ - 警告提示
- `danger` ⛔ - 危险警告  
- `tip` 💡 - 小贴士
- `mention` 💬 - 提及说明
- `recommend` 👍 - 推荐内容
- `note` 📝 - 笔记说明
- `info` ℹ️ - 信息提示
- `success` ✅ - 成功提示
- `error` ❌ - 错误提示

### 开发相关
- `bug` 🐛 - Bug 报告
- `todo` 📋 - 待办事项
- `code` 💻 - 代码相关
- `example` 🔍 - 示例说明
- `update` 🔄 - 更新说明

### 内容组织
- `quote` 💭 - 引用内容
- `link` 🔗 - 链接说明
- `reference` 📚 - 参考资料
- `summary` 📊 - 总结概要
- `detail` 🔬 - 详细说明

### 强调类型
- `critical` 🚨 - 关键重要
- `important` 🔥 - 重要提示
- `caution` ⚡ - 谨慎注意
- `highlight` 🌟 - 高亮显示
- `star` ⭐ - 特别标注

### 学术相关
- `formula` 🧮 - 公式说明
- `question` ❓ - 问题提出
- `answer` ✔️ - 答案解释

### 其他
- `time` ⌛ - 时间相关

### 配置示例

```yml
hexo_tips:
  warning:
    icon: '⚠'
    style:
      border: '#ffb100'
      light:
        background: '#fff8e6'
      dark:
        background: '#3d371f'  
  danger:
    icon: '⛔'
    style:
      border: '#ff4545'
      light:
        background: '#ffeded'
      dark:
        background: '#3d2222'  
  tip:
    icon: '💡'
    style:
      border: '#409eff'
      light:
        background: '#e6f4ff'
      dark:
        background: '#1f2f3d'  
  mention:
    icon: '💬'
    style:
      border: '#b45fff'
      light:
        background: '#f3e6ff'
      dark:
        background: '#2f1f3d'   
  recommend:
    icon: '👍'
    style:
      border: '#67c23a'
      light:
        background: '#e6ffe6'
      dark:
        background: '#1f3d1f'   
  note:
    icon: '📝'
    style:
      border: '#9e9e9e'
      light:
        background: '#f5f5f5'
      dark:
        background: '#363636'   
  info:
    icon: 'ℹ️'
    style:
      border: '#03a9f4'
      light:
        background: '#e3f2fd'
      dark:
        background: '#1f313d'   
  success:
    icon: '✅'
    style:
      border: '#4caf50'
      light:
        background: '#e8f5e9'
      dark:
        background: '#1f3d24'   
  error:
    icon: '❌'
    style:
      border: '#f44336'
      light:
        background: '#ffebee'
      dark:
        background: '#3d1f22'   
  bug:
    icon: '🐛'
    style:
      border: '#e91e63'
      light:
        background: '#fce4ec'
      dark:
        background: '#3d1f2a'   
  todo:
    icon: '📋'
    style:
      border: '#9c27b0'
      light:
        background: '#f3e5f5'
      dark:
        background: '#2f1f3d'   
  example:
    icon: '🔍'
    style:
      border: '#ff9800'
      light:
        background: '#fff3e0'
      dark:
        background: '#3d311f'   
  quote:
    icon: '💭'
    style:
      border: '#607d8b'
      light:
        background: '#eceff1'
      dark:
        background: '#1f292d'   
  link:
    icon: '🔗'
    style:
      border: '#3f51b5'
      light:
        background: '#e8eaf6'
      dark:
        background: '#1f2137'   
  code:
    icon: '💻'
    style:
      border: '#616161'
      light:
        background: '#fafafa'
      dark:
        background: '#363636'   
  update:
    icon: '🔄'
    style:
      border: '#009688'
      light:
        background: '#e0f2f1'
      dark:
        background: '#1f3734'   
  star:
    icon: '⭐'
    style:
      border: '#ffd700'
      light:
        background: '#fffde7'
      dark:
        background: '#3d3a1f'   
  time:
    icon: '⌛'
    style:
      border: '#795548'
      light:
        background: '#efebe9'
      dark:
        background: '#332824'   

```
## 使用方法

通用格式

```
:::name

content

:::
```
比如说
```
:::warning
 
这是一个警告提示

:::

```

样式举例
<img src="https://i.ibb.co/8ghxN0W/7-1-2025-10116-localhost.jpg" alt="7-1-2025-10116-localhost" border="0">

内容支持**markdown格式**

可自动适应**暗色模式**

## 开发

### 环境要求
- Node.js 18+ 
- Bun 1.0+ (推荐) 或 npm/yarn

### 开发流程

```bash
# 克隆项目
git clone https://github.com/xingwangzhe/hexo-tips.git
cd hexo-tips

# 安装依赖 (推荐使用 Bun)
bun install
# 或使用 npm
npm install

# 开发模式 (监听文件变化)
bun run dev
# 或使用 npm
npm run dev

# 构建项目
bun run build
# 或使用 npm
npm run build

# 类型检查
npm run typecheck

# 清理构建文件
npm run clean
```

### 项目结构

```
src/
├── types.ts           # TypeScript 类型定义
├── config.ts          # 默认配置和类型定义
├── cache.ts           # 缓存管理器
├── content-processor.ts # 内容处理器
├── tip-processor.ts   # 提示框处理器
└── index.ts          # 主入口文件
```

### 添加新的提示框类型

1. 在 `src/types.ts` 中的 `TipType` 类型添加新类型
2. 在 `src/config.ts` 中的 `defaultConfig` 添加配置
3. 运行 `bun run build` 重新构建

## 提交版本说明

提交信息格式将决定版本号的更新方式：
- 主版本号(major): 包含 "BREAKING CHANGE" 或 "!" 的提交
- 次版本号(minor): 以 "feat:" 或 "feature:" 开头的提交
- 修订号(patch): 其他所有提交类型，包括但不限于：
  - fix: 修复问题
  - docs: 文档更新
  - style: 代码格式调整
  - refactor: 重构代码
  - test: 测试相关
  - chore: 构建过程或辅助工具的变动
  - perf: 性能优化

例如:
- `feat: 添加新功能` -> 次版本号+1 (1.0.0 → 1.1.0)
- `fix: 修复bug` -> 修订号+1 (1.1.0 → 1.1.1)
- `BREAKING CHANGE: 重构API` -> 主版本号+1 (1.1.1 → 2.0.0)
- `feat!: 不兼容的新功能` -> 主版本号+1 (2.0.0 → 3.0.0)
- `docs: 更新文档` -> 修订号+1 (3.0.0 → 3.0.1)
- `refactor: 代码重构` -> 修订号+1 (3.0.1 → 3.0.2)
- `style: 调整样式` -> 修订号+1 (3.0.2 → 3.0.3)



## 感谢

[copilot](https://github.com/features/copilot)为此设计样式与代码修正