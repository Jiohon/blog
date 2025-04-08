import type { GatsbyNode } from "gatsby"

/**
 * 在Gatsby启动前执行的钩子函数
 * 可以用于日志记录或其他初始化操作
 */
export const onPreBootstrap: GatsbyNode["onPreBootstrap"] = ({ reporter }) => {
  reporter.info("加载 gatsby-rehype-meta-attributes 插件")
}

/**
 * 在Gatsby启动后执行的钩子函数
 */
export const onPostBootstrap: GatsbyNode["onPostBootstrap"] = ({ reporter }) => {
  reporter.success("gatsby-rehype-meta-attributes 插件已成功加载")
}
