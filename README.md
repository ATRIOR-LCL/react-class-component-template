# React Class Component Template
> 快速配置 React 类组件开发环境。😎

## 目录结构
```
react-class-component-template
├─ index.html
├─ README.md
├─ public
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ src
   ├─ routes.ts # 路由配置
   ├─ App.tsx   # 根组件
   ├─ main.tsx  # 程序入口文件
   ├─ utils     # 全局工具函数
   ├─ index.less # 全局样式配置
   ├─ commen
   │  ├─ interface # 组件数据结构接口
   │  └─ modules   # DTO
   ├─ components   # 公共组件
   ├─ modules      # 路由级组件
   │  ├─ home
   │  │  └─ home.view.tsx
   │  └─ about
   └─ assets    # 静态资源
```

## 环境准备

- node v16.x
- pnpm v8.x

## 快速开始

```bash
pnpm i

pnpm dev
```

## 官方文档
[React 17](https://17.reactjs.org/docs/hello-world.html)