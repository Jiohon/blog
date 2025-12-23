import type { GatsbyNode } from "gatsby"

import fs from "fs"
import path from "path"

import { sync } from "glob"

interface CustomPluginOptions {
  pagesDir: string
  _templatesDir: string
  ignore: string[]
  customMappings: Record<string, string>
  nestedIndexToRoot: boolean
  context: Record<string, unknown>
}

/**
 * 自定义路由插件，用于：
 * 1. 自动处理pages目录中的index文件夹中的文件映射到根路径
 * 2. 忽略特定文件或文件夹
 */
export const createPages: GatsbyNode["createPages"] = ({ actions, reporter }, pluginOptions) => {
  const { createPage } = actions

  // 将pluginOptions转换为强类型
  const options = pluginOptions as Partial<CustomPluginOptions>

  const {
    pagesDir = "src/pages",
    // 保留templatesDir作为未来扩展功能
    _templatesDir = "src/templates", // 以_开头表示允许未使用
    ignore = [], // 忽略的文件或文件夹模式（使用glob模式）
    customMappings = {}, // 自定义路径映射 { "源路径": "目标路径" }
    nestedIndexToRoot = true, // 是否将嵌套的index文件夹映射到根路径
    context = {}, // 上下文
  } = options

  // 项目根目录
  const rootDir = path.resolve(".")

  // 检查目录是否存在
  const pagesPath = path.resolve(rootDir, pagesDir)
  if (!fs.existsSync(pagesPath)) {
    reporter.warn(`gatsby-plugin-custom-routing: 目录 ${pagesDir} 不存在，跳过处理`)
    return
  }

  // 处理自定义映射
  Object.entries(customMappings).forEach(([source, destination]) => {
    const componentPath = path.resolve(rootDir, source)
    if (fs.existsSync(componentPath)) {
      createPage({
        path: destination,
        component: componentPath,
        context,
      })
      reporter.info(`gatsby-plugin-custom-routing: 创建映射 ${source} -> ${destination}`)
    } else {
      reporter.warn(`gatsby-plugin-custom-routing: 源文件 ${source} 不存在，跳过映射`)
    }
  })

  // 处理嵌套的index文件夹
  if (nestedIndexToRoot) {
    const indexFolders = sync(`${pagesDir}/*/index.{jsx,js,tsx,ts}`, {
      cwd: rootDir,
      ignore: ignore.map((pattern) =>
        pattern.startsWith("/") ? pattern.slice(1) : `${pagesDir}/${pattern}`
      ),
    })

    indexFolders.forEach((filePath) => {
      // 从文件路径中提取目录名
      const dirMatch = filePath.match(new RegExp(`${pagesDir}/([^/]+)/index\\.[jt]sx?$`))
      if (dirMatch && dirMatch[1]) {
        const folderName = dirMatch[1]
        const componentPath = path.resolve(rootDir, filePath)

        // 创建自定义路由
        createPage({
          path: `/${folderName}`,
          component: componentPath,
          context,
        })
        reporter.info(`gatsby-plugin-custom-routing: 创建映射 ${filePath} -> /${folderName}`)

        // 如果是index文件夹，也映射到根路径
        if (folderName === "index") {
          createPage({
            path: "/",
            component: componentPath,
            context,
          })
          reporter.info(`gatsby-plugin-custom-routing: 创建根路径映射 ${filePath} -> /`)
        }
      }
    })
  }
}

/**
 * 在Gatsby构建时验证插件配置
 */
export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({ Joi }) => {
  return Joi.object({
    pagesDir: Joi.string().description("页面目录的路径"),
    templatesDir: Joi.string().description("模板目录的路径"),
    ignore: Joi.array().items(Joi.string()).description("要忽略的文件或文件夹的glob模式列表"),
    customMappings: Joi.object()
      .pattern(Joi.string(), Joi.string())
      .description("自定义路径映射 { '源路径': '目标路径' }"),
    nestedIndexToRoot: Joi.boolean().description("是否将嵌套的index文件夹映射到根路径"),
    context: Joi.object().description("页面上下文"),
  })
}
