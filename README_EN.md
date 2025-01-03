[中文](README.md)
# hexo-tips
A more convenient way to use tips in Hexo

Install
>npm i hexo-tips

## Version Control
Commit message format determines how version numbers are updated:
- Major version: Commits containing "BREAKING CHANGE" or "!"
- Minor version: Commits starting with "feat:" or "feature:"
- Patch version: All other commits

Examples:
- `feat: add new feature` -> minor version bump (1.0.0 → 1.1.0)
- `fix: fix bug` -> patch version bump (1.1.0 → 1.1.1)
- `BREAKING CHANGE: refactor API` -> major version bump (1.1.1 → 2.0.0)
- `feat!: incompatible new feature` -> major version bump (2.0.0 → 3.0.0)
- `docs: update documentation` -> patch version bump (3.0.0 → 3.0.1)
- `style: adjust styles` -> patch version bump (3.0.1 → 3.0.2)

## Usage

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

Currently supported types:
+ warning: '⚠' - Warning message
+ danger: '⛔' - Danger alert
+ tip: '💡' - Tips
+ mention: '💬' - Mention
+ recommend: '👍' - Recommendation
+ note: '📝' - Notes
+ info: 'ℹ️' - Information
+ success: '✅' - Success
+ error: '❌' - Error
+ bug: '🐛' - Bug
+ todo: '📋' - Todo
+ example: '🔍' - Example
+ quote: '💭' - Quote
+ link: '🔗' - Link
+ code: '💻' - Code
+ update: '🔄' - Update
+ star: '⭐' - Star
+ time: '⌛' - Time

Style examples:
<img src="https://i.ibb.co/64gGqT6/tmsaaaa.webp" alt="tmsaaaa" border="0">

Content supports markdown format

## Thanks

[copilot](https://github.com/features/copilot) for designing styles and code corrections
