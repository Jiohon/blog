# 🚀 Blog 项目开发文档

<div align="center">

[![LICENSE](https://img.shields.io/badge/License-MIT-Green.svg)](https://github.com/Jiohon/blog/blob/master/LICENSE)
[![Node](https://img.shields.io/badge/Node.js-%23339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Gatsby](https://img.shields.io/badge/Gatsby-%23663399?logo=gatsby&logoColor=white)](https://www.gatsbyjs.com)
[![MDX](https://img.shields.io/badge/MDX-%236659D3?logo=mdx&logoColor=white)](https://mdxjs.com)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-%230170FE?logo=ant-design&logoColor=white)](https://ant.design)

**基于 Gatsby + React + TypeScript 的现代化个人博客系统**

[快速开始](#-快速开始) • [项目结构](#-项目结构) • [开发指南](#-开发指南) • [部署](#-构建和部署)

</div>

## 📋 目录

- [项目概览](#-项目概览)
- [技术栈](#-技术栈)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [开发环境配置](#-开发环境配置)
- [代码规范与工具链](#-代码规范与工具链)
- [开发工作流](#-开发工作流)
- [构建和部署](#-构建和部署)
- [常见问题](#-常见问题)
- [贡献指南](#-贡献指南)

## 🎯 项目概览

这是一个现代化的个人博客系统，基于 Gatsby 静态站点生成器构建，支持 MDX 格式的文章编写，集成了完善的开发工具链和代码质量保证机制。

### ✨ 主要特性

- 📝 **MDX 支持**: 在 Markdown 中使用 React 组件
- 🎨 **主题切换**: 支持亮色/暗色主题
- 🔍 **代码高亮**: 基于 Prism.js 的语法高亮
- 📊 **数学公式**: 支持 LaTeX 数学公式渲染
- 💬 **评论系统**: 集成 Giscus 评论
- 🎮 **交互组件**: 支持代码演示和 3D 效果
- 📱 **响应式设计**: 适配各种设备
- ⚡ **性能优化**: SSG + 图片优化
- 🔧 **开发工具**: 完整的 ESLint/Prettier 配置

## 🛠 技术栈

### 核心框架

- **[React 18](https://reactjs.org/)** - UI 框架
- **[Gatsby 5](https://www.gatsbyjs.com/)** - 静态站点生成器
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全

### UI 和样式

- **[Ant Design 5](https://ant.design/)** - UI 组件库
- **[antd-style](https://ant-design.github.io/antd-style/)** - CSS-in-JS 样式解决方案
- **[Chroma.js](https://gka.github.io/chroma.js/)** - 颜色处理

### 内容管理

- **[MDX](https://mdxjs.com/)** - Markdown + React 组件
- **[GraphQL](https://graphql.org/)** - 数据查询
- **[Remark/Rehype](https://github.com/remarkjs/remark)** - Markdown 处理

### 开发工具

- **[ESLint](https://eslint.org/)** - 代码检查
- **[Prettier](https://prettier.io/)** - 代码格式化
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Commitlint](https://commitlint.js.org/)** - 提交信息规范

### 增强功能

- **[Three.js](https://threejs.org/)** - 3D 图形
- **[KaTeX](https://katex.org/)** - 数学公式渲染
- **[Prism.js](https://prismjs.com/)** - 代码高亮
- **[Zustand](https://github.com/pmndrs/zustand)** - 状态管理

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0
- **Git**: 最新版本

### 安装步骤

1. **克隆项目**
   git clone https://github.com/Jiohon/blog.git
   cd blog 2. **安装依赖**
   pnpm install 3. **更新内容子模块**（如果使用子模块管理内容）
   pnpm run update-submodule 4. **启动开发服务器**
   pnpm dev 5. **访问应用**

   打开浏览器访问 `http://localhost:8008`

### 常用命令

# 开发

pnpm dev # 启动开发服务器
pnpm develop # 标准开发模式
pnpm start # 启动开发服务器

# 构建

pnpm build # 生产构建
pnpm build:clean # 清理后构建
pnpm serve # 构建并预览

# 代码质量

pnpm lint # ESLint 检查
pnpm lint:fix # 自动修复 ESLint 问题
pnpm format # Prettier 格式化
pnpm type-check # TypeScript 类型检查
pnpm fix # 格式化 + 修复代码问题
pnpm validate # 完整验证（lint + format + type-check）

# 工具

pnpm clean # 清理缓存
pnpm info # 环境信息## 📁 项目结构

2. **安装依赖**
   pnpm install
   展

{
"recommendations": [
"bradlc.vscode-tailwindcss",
"esbenp.prettier-vscode",
"dbaeumer.vscode-eslint",
"ms-vscode.vscode-typescript-next",
"graphql.vscode-graphql",
"unifiedjs.vscode-mdx"
]
}### EditorConfig

项目包含 `.editorconfig` 文件，确保编辑器设置一致：

root = true

[*]
end_of_line = lf
insert_final_newline = true

[*.{js,json,yml}]
charset = utf-8
indent_style = space
indent_size = 2## 🔧 代码规范与工具链

### ESLint 配置详解

项目使用完善的 ESLint 配置，集成了多个规则集：

#### 核心扩展

- `eslint:recommended` - ESLint 基础规则
- `plugin:import/recommended` - 导入语句规范
- `plugin:react/recommended` - React 最佳实践
- `plugin:@typescript-eslint/recommended` - TypeScript 规则
- `plugin:prettier/recommended` - Prettier 集成
- `plugin:react-hooks/recommended` - React Hooks 规则

#### 导入排序规则

// 导入顺序：
// 1. Node.js 内置模块
import path from "path"
import fs from "fs"

// 2. 外部 npm 包
import React from "react"
import { graphql } from "gatsby"

// 3. Gatsby 相关（特殊处理）
import { Link } from "gatsby"

// 4. 内部别名导入
import { siteConfig } from "@/config"
import Button from "@/components/Button"

// 5. 相对路径导入
import { useStyles } from "./styles"
import Component from "../Component"

// 6. 类型导入
import type { FC } from "react"#### 主要规则

{
// 代码质量
"no-console": ["warn", { "allow": ["warn", "error"] }],
"@typescript-eslint/no-unused-vars": ["error", {
"argsIgnorePattern": "^_",
"varsIgnorePattern": "^_"
}],

// React 相关
"react/react-in-jsx-scope": "off",
"react/prop-types": "off",

// TypeScript 相关
"@typescript-eslint/explicit-function-return-type": "off",
"@typescript-eslint/no-explicit-any": "warn"
}### Prettier 配置

{
"printWidth": 100,
"semi": false,
"singleQuote": false,
"tabWidth": 2,
"trailingComma": "es5",
"arrowParens": "always",
"endOfLine": "lf"
}### TypeScript 配置

关键配置项：

{
"compilerOptions": {
"target": "ES2022",
"jsx": "react-jsx",
"module": "esnext",
"moduleResolution": "node",
"baseUrl": "./",
"paths": {
"@/_": ["./src/_"],
"env.config": ["./env.config.ts"]
},
"strict": true,
"skipLibCheck": true
}
}## 🔄 开发工作流

### Git 工作流

1. **分支策略**
   main # 主分支，部署到生产环境
   develop # 开发分支
   feature/_ # 功能分支
   hotfix/_ # 热修复分支 2. **提交规范**（基于 Conventional Commits）
   feat: 添加新功能
   fix: 修复问题
   docs: 更新文档
   style: 代码格式化
   refactor: 代码重构
   test: 添加测试
   chore: 构建过程或辅助工具的变动
   ### Pre-commit Hooks

项目配置了自动化的代码质量检查：

# 每次提交前自动执行

1. 版本号自动更新
2. ESLint 代码检查
3. Prettier 格式检查
4. TypeScript 类型检查### 开发流程

5. **创建功能分支**
   git checkout -b feature/your-feature-name 2. **编写代码**

   - 遵循 ESLint 规则
   - 使用 TypeScript 类型
   - 添加适当的注释

6. **提交代码**
   git add .
   git commit -m "feat: 添加新功能描述" 4. **推送并创建 PR**
   git push origin feature/your-feature-name
   ## 📝 内容创作指南

### MDX 文章格式

---

title: "文章标题"
date: "2024-01-01"
description: "文章描述"
tags: ["JavaScript", "React"]
published: true
template: "post"

---

# 文章标题

这里是文章内容...

## 代码块示例

const hello = () => {
console.log("Hello World!")
}## React 组件示例

<CustomComponent prop="value" />

## 数学公式

$$
E = mc^2
$$### 支持的组件

- 代码高亮：Prism.js
- 数学公式：KaTeX
- 自定义组件：可在 MDX 中使用
- 代码演示：Sandpack integration

## 🏗 构建和部署

### 本地构建

# 构建生产版本
pnpm build

# 预览构建结果
pnpm serve### 部署到 Netlify

1. 连接 GitHub 仓库
2. 设置构建命令：`pnpm build`
3. 设置发布目录：`public`
4. 环境变量配置（如需要）

### 部署配置

`netlify.toml` 配置：

[build]
  publish = "public"
  command = "pnpm build"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--prefix=/dev/null"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404## ❓ 常见问题

### Q: 如何添加新的页面？

A: 在 `src/pages/` 目录下创建新的组件文件，Gatsby 会自动生成路由。

### Q: 如何自定义主题？

A: 修改 `src/customize-theme/` 目录下的配置文件。

### Q: 如何添加新的组件？

A: 在 `src/components/` 目录下创建新组件，并添加相应的样式和类型定义。

### Q: GraphQL 查询出错怎么办？

A: 使用 `http://localhost:8008/___graphql` 调试 GraphQL 查询。

### Q: 如何优化构建性能？

A:
- 使用 `gatsby clean` 清理缓存
- 优化图片资源
- 检查插件配置

## 🤝 贡献指南

### 贡献流程

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 通过所有检查
5. 创建 Pull Request

### 代码贡献规范

- 遵循现有的代码风格
- 添加适当的类型定义
- 编写清晰的提交信息
- 确保所有测试通过

### Issue 报告

提交 Issue 时请包含：
- 问题描述
- 复现步骤
- 环境信息
- 相关截图

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

## 🙏 致谢

本项目基于 [taniarascia.com](https://github.com/taniarascia/taniarascia.com) 的原始代码，并由 [Jonhn](https://github.com/Jiohon) 自 2022年以来进行修改和增强。

---

<div align="center">

**如有问题，欢迎提交 [Issue](https://github.com/Jiohon/blog/issues) 或 [PR](https://github.com/Jiohon/blog/pulls)**

</div>
$$
