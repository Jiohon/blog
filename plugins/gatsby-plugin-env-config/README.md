# gatsby-plugin-env-config

统一的环境变量配置管理 Gatsby 插件。

## 功能特性

- 🔧 统一的环境变量加载和解析
- 🎯 类型安全的环境变量访问
- 🌍 多环境文件支持
- 🛠️ 开发环境调试功能
- ⚡ 自动类型转换（字符串、数字、布尔值）

## 安装

插件已内置在项目中，无需额外安装。

## 配置

在 `gatsby-config.ts` 中添加插件：

```typescript
export default {
  plugins: [
    {
      resolve: "gatsby-plugin-env-config",
      options: {
        // 环境文件路径数组，默认为 [".env", `.env.${process.env.NODE_ENV}`]
        envFiles: [".env", ".env.local", `.env.${process.env.NODE_ENV}`],
        
        // 是否在开发环境显示日志，默认为 true
        developmentLogging: true,
        
        // 必需的环境变量列表，默认为 ["NODE_ENV"]
        validateRequired: ["NODE_ENV", "GATSBY_REPO"]
      }
    }
  ]
}
```

## 使用方法

### 基本使用

```typescript
import { env, isDev, isProd } from "@/env"

// 访问环境变量
console.log(env.NODE_ENV)
console.log(env.GATSBY_REPO)

// 环境判断
if (isDev) {
  console.log("开发环境")
}
```

### 高级使用

```typescript
import { getEnvValue, parseEnv } from "@/env"

// 获取单个环境变量
const apiUrl = getEnvValue("API_URL", "http://localhost:3000")

// 解析自定义环境变量对象
const customEnv = parseEnv({
  CUSTOM_VAR: "true",
  CUSTOM_NUMBER: "123"
})
```

## 环境变量类型

支持的环境变量：

- `NODE_ENV`: 运行环境
- `GATSBY_NOT_PUBLISHED`: 是否筛选未发布文章
- `GATSBY_REPO`: GitHub 仓库
- `GATSBY_REPO_ID`: GitHub 仓库 ID
- `GATSBY_CATEGORY`: 讨论区分类名称
- `GATSBY_CATEGORY_ID`: 讨论区分类 ID

## 类型转换

插件会自动进行类型转换：

- `"true"` / `"false"` → `boolean`
- 纯数字字符串 → `number`
- 其他 → `string`

## 许可证

MIT 