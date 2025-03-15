<div align="center">
<h1>work-template</h1>

![GitHub license](https://img.shields.io/github/license/Yolo-00/work-template?style=flat)
![GitHub stars](https://img.shields.io/github/stars/Yolo-00/work-template?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/Yolo-00/work-template?style=flat)

[React版本](https://github.com/Yolo-00/work-template-react)

</div>

### 介绍 📖

`work-template` 一款基于 `Vue3.4`、`TypeScript`、`Vite5`、`vue-router`、`Pinia`、`Element-Plus`、`unocss` 开源的模板框架，使用目前最新技术栈开发。在一定程度上节省您的开发效率。另外本项目还封装了一些常用组件、Hooks、指令、路由、国际化等功能。

### 项目功能 🔨

- 使用 Vue3.4 + TypeScript 开发，单文件组件**＜ script setup ＞**，支持`tsx`写法
- 采用 Vite5 作为项目开发、打包工具（生成包预览、跨域代理、代码兼容……）
- 使用 Pinia 替代 Vuex，轻量、简单、易用， 集成 Pinia 持久化插件
- 使用 TypeScript 对 Axios 整个二次封装 （请求拦截、常用请求封装……）
- 使用 VueRouter 进行路由权限拦截、路由懒加载、动态路由
- 支持 Element Plus 组件和页面的 i18n 国际化以及黑暗模式
- 常用自定义指令开发（复制、水印、拖拽、节流、防抖、长按……）
- 常用自定义 hooks（下载文件、获取时间、语言切换……）
- 使用 Prettier 统一格式化代码，集成 Eslint 代码校验规范
- 打包优化（配置 Gzip 打包、分包策略、CDN 引入……）

### 内置组件 📚

- 代码编辑器（基于 [**monaco-editor**](https://github.com/microsoft/monaco-editor)）
- 富文本编辑器（基于 [**wangeditor**](https://github.com/wangeditor-team/wangEditor)）
- Markdown编辑器（基于 [**md-editor-v3**](https://github.com/imzbf/md-editor-v3)）
- 瀑布流布局（基于 [**masonry-layout**](https://github.com/desandro/masonry)）
- 各类文件预览，兼容：`Docx`、`Excel`、`PDF`、`img`
- 生成二维码（基于 [**qrcode**](https://github.com/soldair/node-qrcode)）
- 分割面板（基于 [**splitpanes**](https://github.com/antoniandre/splitpanes)）
- 拖拽排序（基于 [**vue-draggable-plus**](https://github.com/Alfred-Skyblue/vue-draggable-plus)）
- Lottie组件（基于 [**lottie-web**](https://github.com/airbnb/lottie-web)）
- 滑块验证组件（基于 [**vue3-puzzle-vcode**](https://www.npmjs.com/package/vue3-puzzle-vcode)）
- 碎片化图片
- 无缝衔接滚动组件
- 虚拟表格组件
- 图片封面位置调整组件

### 安装使用步骤 📔

- **Clone：**

```bash
# Gitee
git clone https://gitee.com/Yolo__00/work-template.git

# GitHub
git clone https://github.com/Yolo-00/work-template.git
```

- **Install：**

```bash
yarn install

# yarn install 安装失败，请升级 nodejs 到 18 以上
```

- **Run：**

```bash
yarn dev
```

- **Build：**

```bash
# 开发环境
yarn build:dev

# 测试环境
yarn build:test

# 生产环境
yarn build:prod
```

## 如何贡献

非常欢迎您的加入！[提一个 Issue](https://github.com/Yolo-00/work-template/issues/new/choose) 或者提交一个 `Pull Request`

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交您的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`

## `Git` 贡献提交规范

参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中

## `Star`

非常感谢留下星星的好心人，感谢您的支持 ❤️

[![Stargazers repo roster for Yolo-00/work-template](https://bytecrank.com/nastyox/reporoster/php/stargazersSVG.php?user=Yolo-00&repo=work-template)](https://github.com/Yolo-00/work-template/stargazers)

## `Fork`

瞧，那些 `小哥哥` 、`小姐姐` 认真 `学习` 的样子真滴是 `哎呦不错哦` ❤️

[![Forkers repo roster for Yolo-00/work-template](https://bytecrank.com/nastyox/reporoster/php/forkersSVG.php?user=Yolo-00&repo=work-template)](https://github.com/Yolo-00/work-template/network/members)
