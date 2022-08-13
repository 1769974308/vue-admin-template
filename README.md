# vue-admin-template



## Build Setup

```bash

# enter the project directory
cd vue-admin-template

# install dependency
npm install

# develop
npm run dev
```

This will automatically open http://localhost:9528

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## 对模板进行必要的改造

- 修改 element-ui 为中文状态
- 登录系统，删除多余路由
- 关闭 eslint 校验
- api 文件夹内新建一个 index.js 文件
- 引入封装好 request.js 请求工具
- 把登录接口，获取用户信息以及获取路由表的接口封装成请求方法
- 在 vue.config.js 里配置反向代理，解决接口跨域问题
- 修改 .env.development 文件的 VUE_APP_BASE_API