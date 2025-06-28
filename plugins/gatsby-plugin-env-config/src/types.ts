/**
 * 可变类型工具
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

/**
 * 插件配置选项
 */
export interface PluginOptions {
  /** 环境文件路径数组 */
  envFiles?: string[]
  /** 是否在开发环境显示日志 */
  developmentLogging?: boolean
  /** 必需的环境变量列表 */
  validateRequired?: string[]
}

/**
 * 环境配置接口
 */
export interface EnvConfig {
  /** 环境变量 */
  NODE_ENV: string
  /** 是否筛选未发布文章 */
  GATSBY_NOT_PUBLISHED?: string
  /** 评论组件 - GitHub 仓库 */
  GATSBY_REPO?: string
  /** 评论组件 - GitHub 仓库 ID */
  GATSBY_REPO_ID?: string
  /** 评论组件 - 讨论区分类名称 */
  GATSBY_CATEGORY?: string
  /** 评论组件 - 讨论区分类ID */
  GATSBY_CATEGORY_ID?: string
}
