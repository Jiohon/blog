import { promises as fs } from "fs"
import path from "path"

import type { GatsbyNode } from "gatsby"

/**
 * 规范化版本号格式
 * @param version - 原始版本号
 * @returns 规范化后的版本号
 */
const normalizeVersion = (version: string): string => {
  // 移除版本号中可能存在的 'v' 前缀
  const cleanVersion = version.replace(/^v/, "")
  // 确保版本号是有效的语义化版本格式 (x.y.z)
  const semverRegex =
    /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/

  if (semverRegex.test(cleanVersion)) {
    return cleanVersion
  }

  // 如果版本号不符合语义化版本规范，尝试转换为标准格式
  const parts = cleanVersion.split(".")
  while (parts.length < 3) {
    parts.push("0")
  }

  return parts.slice(0, 3).join(".")
}

export const onPreBootstrap: GatsbyNode["onPreBootstrap"] = async ({ reporter }) => {
  try {
    // 读取 package.json 获取版本信息
    const packageJsonPath = path.resolve("package.json")
    const packageJsonContent = await fs.readFile(packageJsonPath, "utf-8")
    const packageJson = JSON.parse(packageJsonContent)

    // 获取当前时间
    const now = new Date()

    // 构建版本信息对象
    const content = {
      version: normalizeVersion(packageJson.version),
      buildTime: now.toISOString(),
      timestamp: now.getTime(), // 毫秒时间戳
      env: process.env.NODE_ENV || "development",
    }

    // 确保 public 目录存在
    const publicDir = path.resolve("public")
    try {
      await fs.access(publicDir)
    } catch {
      await fs.mkdir(publicDir, { recursive: true })
    }

    // 写入版本文件
    const versionFile = path.join(publicDir, "version.json")
    await fs.writeFile(versionFile, JSON.stringify(content, null, 2), "utf-8")

    reporter.success(`版本信息文件已成功创建: v${content.version} (${content.timestamp})`)
  } catch (error) {
    reporter.panic(
      `创建版本信息文件失败: ${error instanceof Error ? error.message : String(error)}`
    )
  }
}
