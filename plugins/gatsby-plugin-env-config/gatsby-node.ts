import path from "path"
import { fileURLToPath } from "url"

import { initializeEnv, parseEnvConfig } from "./src/envParser"

import type { PluginOptions } from "./src/types"
import type { GatsbyNode } from "gatsby"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 全局环境配置实例
let env: ReturnType<typeof parseEnvConfig>

export const onPreBootstrap: GatsbyNode["onPreBootstrap"] = async ({ reporter }, pluginOptions) => {
  try {
    const {
      envFiles = [".env", `.env.${process.env.NODE_ENV}`],
      developmentLogging = true,
      validateRequired = ["NODE_ENV"],
    } = (pluginOptions || {}) as PluginOptions

    // 初始化环境配置
    initializeEnv(envFiles)
    env = parseEnvConfig()

    // 验证必需的环境变量
    const missingVars = validateRequired.filter((key) => !env[key as keyof typeof env])
    if (missingVars.length > 0) {
      reporter.warn(`缺少必需的环境变量: ${missingVars.join(", ")}`)
    }

    // 开发环境日志
    if (developmentLogging && env.NODE_ENV === "development") {
      console.log("🔧 环境配置已加载:", env)
      reporter.success("环境配置插件初始化成功")
    }

    // 将环境配置设置为全局可访问
    global.__GATSBY_ENV_CONFIG__ = env
  } catch (error) {
    reporter.panic(
      `环境配置插件初始化失败: ${error instanceof Error ? error.message : String(error)}`
    )
  }
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
  // 获取当前环境配置
  const currentEnv = env || parseEnvConfig()

  // 将环境变量注入到 process.env 中
  Object.keys(currentEnv).forEach((key) => {
    if (!process.env[key]) {
      process.env[key] = String(currentEnv[key as keyof typeof currentEnv])
    }
  })

  // 添加一些常用的环境判断到 process.env
  process.env.__DEV__ = String(currentEnv.NODE_ENV === "development")
  process.env.__PROD__ = String(currentEnv.NODE_ENV === "production")
  process.env.__STAGING__ = String(currentEnv.NODE_ENV === "staging")

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/env": path.resolve(__dirname, "index.ts"),
      },
    },
  })
}
