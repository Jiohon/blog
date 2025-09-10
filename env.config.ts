/**
 * 解析环境变量配置
 * @param value 环境变量值
 * @returns 解析后的环境变量值
 */
export const getParseEnv = (value: string | boolean | undefined | null) => {
  if (value === undefined) {
    return undefined
  }

  if (value === "true") {
    return true as never
  } else if (value === "false") {
    return false as never
  } else if (typeof value === "string" && /^\d+$/.test(value) && !isNaN(Number(value))) {
    return Number(value) as never
  } else {
    return value
  }
}

/**
 * 是否为开发环境
 */
export const isDev = getParseEnv(process.env.NODE_ENV) === "development"

/**
 * 是否为生产环境
 */
export const isProd = process.env.NODE_ENV === "production"

/**
 * 是否为预发布环境
 */
export const isStaging = process.env.NODE_ENV === "staging"
