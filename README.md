[English](README_EN.md)
# hexo-tips
更便捷地使用小贴士

使用

>npm i hexo-tips

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

目前支持
+ warning: '⚠' - 警告信息
+ danger: '⛔' - 危险提示
+ tip: '💡' - 小贴士
+ mention: '💬' - 提及
+ recommend: '👍' - 推荐
+ note: '📝' - 笔记
+ info: 'ℹ️' - 信息
+ success: '✅' - 成功
+ error: '❌' - 错误
+ bug: '🐛' - 漏洞
+ todo: '📋' - 待办
+ example: '🔍' - 示例
+ quote: '💭' - 引用
+ link: '🔗' - 链接
+ code: '💻' - 代码
+ update: '🔄' - 更新
+ star: '⭐' - 重点
+ time: '⌛' - 时间

样式举例
<img src="https://i.ibb.co/64gGqT6/tmsaaaa.webp" alt="tmsaaaa" border="0">

内容支持md格式

## 感谢

[copilot](https://github.com/features/copilot)为此设计样式与代码修正