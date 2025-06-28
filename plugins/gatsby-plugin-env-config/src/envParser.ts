import * as dotenv from "dotenv"

import type { EnvConfig, Mutable } from "./types"

let dotenvConfig: ReturnType<typeof dotenv.configDotenv>

/**
 * 初始化环境配置
 * @param envFiles 环境文件路径数组
 */
export const initializeEnv = (envFiles: string[] = [".env", `.env.${process.env.NODE_ENV}`]) => {
  dotenvConfig = dotenv.configDotenv({
    path: envFiles,
    override: true,
  })
  return dotenvConfig
}

/**
 * 解析环境变量配置
 */
export const parseEnv = (env: Record<string, string>): NodeJS.ProcessEnv => {
  const parsed: Mutable<NodeJS.ProcessEnv> = {} as Mutable<NodeJS.ProcessEnv>

  for (const [_key, value] of Object.entries(env)) {
    const key = _key as keyof NodeJS.ProcessEnv

    if (value === undefined) {
      parsed[key] = undefined as never
      continue
    }

    if (value === "true") {
      parsed[key] = true as never
    } else if (value === "false") {
      parsed[key] = false as never
    } else if (!isNaN(Number(value))) {
      parsed[key] = Number(value) as never
    } else {
      parsed[key] = value as never
    }
  }

  return parsed
}

/**
 * 获取环境变量值
 */
export const getEnvValue = <T extends keyof NodeJS.ProcessEnv>(
  key: T,
  defaultValue?: NodeJS.ProcessEnv[T]
): NodeJS.ProcessEnv[T] => {
  const env = dotenvConfig?.parsed as NodeJS.ProcessEnv

  const value = env?.[key]

  if (value === undefined || value === "") {
    return defaultValue as string
  }

  // 处理布尔值
  if (value === "true") return true as unknown as NodeJS.ProcessEnv[T]
  if (value === "false") return false as unknown as NodeJS.ProcessEnv[T]

  return value
}

/**
 * 解析环境变量配置
 */
export const parseEnvConfig = (): EnvConfig => {
  return {
    /**
     * 环境变量
     */
    NODE_ENV: getEnvValue("NODE_ENV", "development"),

    /**
     * 是否筛选未发布文章
     */
    GATSBY_NOT_PUBLISHED: getEnvValue("GATSBY_NOT_PUBLISHED"),

    /**
     * 评论组件 - GitHub 仓库
     */
    GATSBY_REPO: getEnvValue("GATSBY_REPO"),

    /**
     * 评论组件 - GitHub 仓库 ID
     */
    GATSBY_REPO_ID: getEnvValue("GATSBY_REPO_ID"),

    /**
     * 评论组件 - 讨论区分类名称
     */
    GATSBY_CATEGORY: getEnvValue("GATSBY_CATEGORY"),

    /**
     * 评论组件 - 讨论区分类ID
     */
    GATSBY_CATEGORY_ID: getEnvValue("GATSBY_CATEGORY_ID"),
  } as EnvConfig
}
