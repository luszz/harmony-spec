import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Conform Spec',
  base: '/conform-spec/',
  description: '',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
        ],
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: '文档规范', link: '/engineering/doc.md' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'eslint-config-conform', link: '/npm/eslint.md' },
          { text: 'stylelint-config-conform', link: '/npm/stylelint.md' },
          { text: 'commitlint-config-conform', link: '/npm/commitlint.md' },
          { text: 'markdownlint-config-conform', link: '/npm/markdownlint.md' },
          { text: 'eslint-plugin-conform', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'conform-lint', link: '/cli/conform-lint.md' }],
      },
    ],

    sidebar: [
      {
        text: '开始',
        link: '/guide/getting-started',
      },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
        ],
        collapsed: true,
      },
      {
        text: '工程规范',
        items: [
          {
            text: 'Git 规范',
            link: '/engineering/git.md',
          },
          {
            text: '文档规范',
            link: '/engineering/doc.md',
          },
          {
            text: 'CHANGELOG 规范',
            link: '/engineering/changelog.md',
          },
        ],
        collapsed: true,
      },
      {
        text: 'NPM包',
        items: [
          { text: 'eslint-config-conform', link: '/npm/eslint.md' },
          { text: 'stylelint-config-conform', link: '/npm/stylelint.md' },
          { text: 'commitlint-config-conform', link: '/npm/commitlint.md' },
          { text: 'markdownlint-config-conform', link: '/npm/markdownlint.md' },
          { text: 'eslint-plugin-conform', link: '/npm/eslint-plugin.md' },
        ],
        collapsed: true,
      },
      {
        text: '脚手架',
        items: [{ text: 'conform-lint', link: '/cli/conform-lint.md' }],
        collapsed: true,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/luszz/conform-spec' },
    ],
  },
});
