[中文](README.md)
# hexo-tips
A more convenient way to use tips in Hexo

## Usage

```
npm i hexo-tips
```

## Configuration

You can add, modify or delete styles as needed:

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

## How to Use

General format:

```
:::name

content

:::
```

For example:
```
:::warning
 
This is a warning message

:::
```

Style examples:
<img src="https://i.ibb.co/8ghxN0W/7-1-2025-10116-localhost.jpg" alt="7-1-2025-10116-localhost" border="0">

Content supports **markdown format**

Automatically adapts to **dark mode**

## Version Control
Commit message format determines how version numbers are updated:
- Major version: Commits containing "BREAKING CHANGE" or "!"
- Minor version: Commits starting with "feat:" or "feature:"
- Patch version: All other commit types, including but not limited to:
  - fix: Bug fixes
  - docs: Documentation changes
  - style: Code style changes
  - refactor: Code refactoring
  - test: Adding or modifying tests
  - chore: Build process or auxiliary tool changes
  - perf: Performance improvements

Examples:
- `feat: add new feature` -> minor version bump (1.0.0 → 1.1.0)
- `fix: fix bug` -> patch version bump (1.1.0 → 1.1.1)
- `BREAKING CHANGE: refactor API` -> major version bump (1.1.1 → 2.0.0)
- `feat!: incompatible new feature` -> major version bump (2.0.0 → 3.0.0)
- `docs: update documentation` -> patch version bump (3.0.0 → 3.0.1)
- `refactor: code restructuring` -> patch version bump (3.0.1 → 3.0.2)
- `style: adjust styles` -> patch version bump (3.0.2 → 3.0.3)

## Thanks

[copilot](https://github.com/features/copilot) for designing styles and code corrections
