# work-template

### 介绍 📖

work-template 一款基于 Vue3、TypeScript、Vite3、Pinia、Element-Plus 开源的模板框架，使用目前最新技术栈开发。在一定程度上节省您的开发效率。另外本项目还封装了一些常用组件、Hooks、指令、路由、等功能。

### 项目功能 🔨

- 使用 Vue3 + TypeScript 开发，单文件组件**＜ script setup ＞**
- 采用 Vite3 作为项目开发、打包工具（配置 Gzip 打包、TSX 语法、跨域代理……）
- 使用 Pinia 替代 Vuex，轻量、简单、易用， 集成 Pinia 持久化插件
- 使用 TypeScript 对 Axios 整个二次封装 （请求拦截、常用请求封装……）
- 使用 VueRouter 进行路由权限拦截、路由懒加载
- 常用自定义指令开发（权限、复制、水印、拖拽、节流、防抖、长按……）
- 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范

### 安装使用步骤 📔

- **Clone：**

```text
# Gitee
git clone https://gitee.com/guo__Mr/work-template.git
```

- **Install：**

```text
yarn install

# yarn install 安装失败，请升级 nodejs 到 16 以上
```

- **Run：**

```text
yarn dev
```

- **Build：**

```text
# 开发环境
yarn build:dev

# 测试环境
yarn build:test

# 生产环境
yarn build:pro
```
