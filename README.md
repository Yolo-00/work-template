# work-template

### 介绍 📖

work-template 一款基于 Vue3、TypeScript、Vite4、vue-router4、Pinia、Element-Plus、tailwindcss 开源的模板框架，使用目前最新技术栈开发。在一定程度上节省您的开发效率。另外本项目还封装了一些常用组件、Hooks、指令、路由、国际化等功能。

### 项目功能 🔨

- 使用 Vue3 + TypeScript 开发，单文件组件**＜ script setup ＞**
- 采用 Vite4 作为项目开发、打包工具（生成包预览、跨域代理、代码兼容……）
- 使用 Pinia 替代 Vuex，轻量、简单、易用， 集成 Pinia 持久化插件
- 使用 TypeScript 对 Axios 整个二次封装 （请求拦截、常用请求封装……）
- 使用 VueRouter 进行路由权限拦截、路由懒加载
- 支持 Element 组件和页面的 i18n 国际化
- 常用自定义指令开发（复制、水印、拖拽、节流、防抖、长按……）
- 常用自定义 hooks（下载文件、获取时间、语言切换……）
- 使用 Prettier 统一格式化代码，集成 Eslint 代码校验规范
- 打包优化（配置 Gzip 打包、分包策略、CDN 引入……）

### 安装使用步骤 📔

- **Clone：**

```text
# Gitee
git clone https://gitee.com/guo__Mr/work-template.git
# GitHub
git clone https://github.com/guoCertain/work-template.git
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
yarn build:prod
```

```text
work-template
├─ .husky                 # husky 配置文件
├─ .vscode                # VSCode 推荐配置
├─ public                 # 静态资源文件（该文件夹不会被打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ enums               # 项目常用枚举
│  ├─ hooks               # 常用 Hooks 封装
│  ├─ languages           # 语言国际化 i18n
│  ├─ layouts             # 框架布局模块
│  ├─ routers             # 路由管理
│  ├─ stores              # 全局状态管理
│  ├─ styles              # 全局样式文件
│  ├─ utils               # 常用工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 项目主组件
│  ├─ main.ts             # 项目入口文件
│  └─ vite-env.d          # 指定 ts 识别
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置文件
├─ .gitignore             # 忽略 git 提交
├─ .prettierignore        # 忽略 Prettier 格式化
├─ .prettierrc.js         # Prettier 格式化配置
├─ index.html             # 入口 html
├─ LICENSE                # 开源协议文件
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置文件
├─ README.md              # README 介绍
├─ tailwind.config.js     # tailwind 配置文件
├─ tsconfig.json          # typescript 全局配置
├─ vite.config.ts         # vite 全局配置文件
└─ yarn.lock              # 依赖包包版本锁
```
