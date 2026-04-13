<div align="center">
<h1>work-template</h1>
</div>

### 介绍

`work-template` 一款基于 `Vue3.4`、`TypeScript`、`Vite5`、`vue-router`、`Pinia`、`Element-Plus`、`unocss` 开源的模板框架，使用目前最新技术栈开发。在一定程度上节省您的开发效率。另外本项目还封装了一些常用组件、Hooks、指令、路由、国际化等功能。

### 项目功能

- 使用 Vue3.4 + TypeScript 开发，单文件组件 **`<script setup>`**，支持 `tsx` 写法
- 采用 Vite5 作为项目开发、打包工具（生成包预览、跨域代理、代码兼容……）
- 使用 Pinia 替代 Vuex，轻量、简单、易用， 集成 Pinia 持久化插件
- 使用 TypeScript 对 Axios 整个二次封装 （请求拦截、常用请求封装……）
- 使用 VueRouter 进行路由权限拦截、路由懒加载、动态路由
- 支持 Element Plus 组件和页面的 i18n 国际化以及黑暗模式
- 常用自定义指令开发（复制、水印、拖拽、节流、防抖、长按……）
- 常用自定义 hooks（下载文件、获取时间、语言切换……）
- 使用 Prettier 统一格式化代码，集成 Eslint 代码校验规范
- 打包优化（配置 Gzip 打包、分包策略……）

### 内置组件

- 富文本编辑器（基于 [wangeditor](https://www.npmjs.com/package/@wangeditor/editor-for-vue)）
- Markdown 编辑器（基于 [md-editor-v3](https://www.npmjs.com/package/md-editor-v3)）
- 各类文件预览，兼容：`Docx`、`Excel`、`PDF`、`img`
- 生成二维码（基于 [qrcode](https://www.npmjs.com/package/qrcode)）
- 滑块验证组件（基于 [vue3-puzzle-vcode](https://www.npmjs.com/package/vue3-puzzle-vcode)）
- 无缝衔接滚动组件
- 虚拟表格组件

### 安装与运行

- **Install：**

```bash
pnpm install

# 安装失败时请将 Node.js 升级到 18 及以上
```

- **Run：**

```bash
pnpm dev
```

- **Build：**

```bash
# 开发环境
pnpm build:dev

# 测试环境
pnpm build:test

# 生产环境
pnpm build:prod
```
