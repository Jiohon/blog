import { parseEnvConfig } from "./src/envParser"

// 导出类型
export type { PluginOptions, EnvConfig, Mutable } from "./src/types"

// 导出工具函数
export { parseEnv, getEnvValue, initializeEnv, parseEnvConfig } from "./src/envParser"

/**
 * 环境配置实例
 */
export const env = parseEnvConfig()

/**
 * 是否为开发环境
 */
export const isDev = env.NODE_ENV === "development"

/**
 * 是否为生产环境
 */
export const isProd = env.NODE_ENV === "production"

/**
 * 是否为预发布环境
 */
export const isStaging = env.NODE_ENV === "staging"

// 默认导出环境配置
export default env
