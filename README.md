[English](README_EN.md)
# hexo-tips

更便捷地使用小贴士

## 使用

```
npm i hexo-tips

```

## 配置

你可以根据需要增添改删样式

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