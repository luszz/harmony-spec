---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Conform Spec"
  text: ""
  tagline: 支持一键接入、一键扫描、一键修复、一键升级
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/getting-started
    - theme: alt
      text: 介绍
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: 'https://github.com/luszz/conform-spec'

features:
  - title: ESLint
    icon:
      src: /eslint.svg
    details: ESLint 静态分析您的代码以快速发现问题。它内置于大多数文本编辑器中，您可以将 ESLint 作为持续集成管道的一部分运行。
    link: https://eslint.org/
  - title: StyleLint
    icon:
      src: /stylelint.png
    details: 强大的 CSS linter，可以帮助您避免错误并强制执行约定。
    lint: https://stylelint.io/
  - title: CommitLint
    icon:
      src: /commitlint.png
    details: 帮助您的团队遵守提交约定
    lint: https://commitlint.js.org/
  - title: Node
    icon:
      src: /node.png
    details: Node.js® 是一个免费、开源、跨平台的 JavaScript 运行时环境，可让开发人员创建服务器、Web 应用程序、命令行工具和脚本。
    lint: https://nodejs.org/en
  - title: Prettier
    icon:
      src: /prettier.png
    details: 您的代码在保存时已格式化 无需在代码审查中讨论风格 节省您的时间和精力
    lint: https://prettier.io/
  - title: Jest
    icon:
      src: /jest.png
    details: Jest 是一款优雅、简洁的 JavaScript 测试框架。
    lint: https://jestjs.io/zh-Hans/
---
