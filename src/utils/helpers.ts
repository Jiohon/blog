import type { AnchorLinkItemProps } from "antd/es/anchor/Anchor"

/**
 * @description 简化查询数据
 * @param {ReadonlyArray<GraphqlNode>} nodes
 * @param {(e: GraphqlNode) => PathFrontmatter} [callback]
 * @return {*}  {PathFrontmatter[]}
 */
export const simplifiedQueryData = (
  nodes: ReadonlyArray<GraphqlNode>,
  callback?: (e: GraphqlNode) => PathFrontmatter
): PathFrontmatter[] => {
  if (!nodes) return []
  const result = nodes
    .map((node) => {
      const { frontmatter, fields } = node as GraphqlNode

      if (callback) {
        return callback(node)
      }

      const newNode = {
        ...frontmatter,
        path: fields.path,
      }

      return newNode
    })
    .filter((e) => e !== null)

  return result
}

interface TableOfContentsItem {
  url: string
  title: string
  items?: TableOfContentsItem[] // 可选的子项
}

export interface HeadingItem extends AnchorLinkItemProps {
  level: number
  children?: HeadingItem[]
}

/**
 * @description 查询当前树的最大层级
 * @date 19/10/2024
 * @param {HeadingItem[]} tree
 * @param {number} [currentLevel=1]
 * @return {*}  {number}
 */
export function findMaxLevel(tree: HeadingItem[], currentLevel = 1): number {
  // 初始化最大层级为当前层级
  let maxLevel = currentLevel

  tree.forEach((item) => {
    if (item.children && item.children.length > 0) {
      // 如果存在子项，递归计算子项的最大层级
      const childMaxLevel = findMaxLevel(item.children, currentLevel + 1)
      // 更新最大层级
      maxLevel = Math.max(maxLevel, childMaxLevel)
    }
  })

  return maxLevel
}

/**
 * @description 生成字符串的简单哈希值
 * @date 24/03/2024
 * @param {string} str
 * @return {string}
 */
export const simpleHash = (str: string): string => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  // 转换为正数并取8位十六进制
  return Math.abs(hash).toString(16).slice(0, 5)
}

/**
 * @description 扁平化处理只包含单个items的结构并转换为AnchorLink格式
 * @date 24/03/2024
 * @param {TableOfContentsItem[]} items
 * @param {number} [level=1]
 * @param {string} [parentUrl='']
 * @return {*}  {HeadingItem[]}
 */
export function filtersItems(
  items: TableOfContentsItem[],
  level = 1,
  parentUrl = ""
): HeadingItem[] {
  return items.reduce<HeadingItem[]>((acc, item) => {
    // 如果当前项只有一个items属性，直接处理其子项
    if (Object.keys(item).length === 1 && item.items) {
      return [...acc, ...filtersItems(item.items, level, parentUrl)]
    }

    // 生成带有父级前缀的href
    const urlPath = parentUrl ? `${parentUrl}-${item.url}` : item.url

    // 转换为HeadingItem格式
    const headingItem: HeadingItem = {
      key: urlPath,
      href: `${item.url}`,
      title: item.title,
      className: `level-${level} ${item.url.replace("#", "anchor-")}`,
      level: level,
    }

    // 处理子项
    if (item.items) {
      headingItem.children = filtersItems(item.items, level + 1, urlPath)
    }

    return [...acc, headingItem]
  }, [])
}

/**
 * @description 获取要在代码块中突出显示的行
 * @param meta
 * @returns 一个函数，返回一个布尔值，具体取决于索引是否应该突出显示 (零索引)
 * @example
 * calculateLinesToHighlight('3')
 * calculateLinesToHighlight('3-6')
 * calculateLinesToHighlight('3-6,8')
 */
export const calculateLinesToHighlight = (meta?: string) => {
  if (!meta) {
    return () => false
  }

  const lineNumbers = meta.split(`,`).map((v) => v.split(`-`).map(Number))
  return (index: number) => {
    const lineNumber = index + 1
    return lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
  }
}

type YearListData = Record<string, PathFrontmatter[]>

/**
 * @description 将文章按年份分组
 * @param {PathFrontmatter[]} posts - 文章列表
 * @return {YearListData} 按年份分组的文章集合
 */
export const groupPostsByYear = (posts: PathFrontmatter[]): YearListData => {
  const collection: YearListData = {}

  posts.forEach((item) => {
    const year = item.date?.split(", ")[1]

    collection[year] = [...(collection[year] || []), item]
  })

  return collection
}

/**
 * @description 解析文件路径，提取中间部分
 * @param {GraphqlNode} node
 * @return {*}  {string}
 */
export const parseFilePath = (node: GraphqlNode): string => {
  const pathList = ["blog/content", "blog"]
  const filePath = node.internal.contentFilePath
  const slug = node.frontmatter.slug

  const _path = pathList.find((path) => filePath.includes(path))

  if (!_path) {
    return slug
  }

  let middlePath = ""

  // 提取 posts/ 和文件名之间的路径部分
  const postsIndex = filePath.indexOf(_path) + _path.length
  const fullPath = filePath.substring(postsIndex)
  const lastSlashIndex = fullPath.lastIndexOf("/")

  if (lastSlashIndex !== -1) {
    // 如果存在中间路径
    middlePath = fullPath.substring(0, lastSlashIndex)
  }
  return `${middlePath}/${slug}`
}

/**
 * @description 获取文章的标签
 * @param {GraphqlNode[]} nodes
 * @return {string[]}
 */
export const getPostTags = (nodes: GraphqlNode[]): string[] => {
  const tagSet = new Set<string>()

  nodes.forEach((node) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag)
      })
    }
  })

  return Array.from(tagSet)
}
