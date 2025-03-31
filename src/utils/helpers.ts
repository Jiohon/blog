import type { AnchorLinkItemProps } from "antd/es/anchor/Anchor"

interface GraphqlNode {
  frontmatter: Frontmatter
  [key: string]: any
}

type ResponseData<T> = T & SimplifiedQueryData

// type SimplifiedQueryDataFunction = <T>(
//   nodes: ReadonlyArray<T extends null ? GraphqlNode : T>,
//   callback?: (e: ResponseData<T>) => ResponseData<T>
// ) => ResponseData<T>[]
/**
 * @description 简化查询数据
 * @date 16/01/2025
 * @template T
 * @param {ReadonlyArray<T extends null ? GraphqlNode : T>} nodes
 * @param {(e: ResponseData<T>) => ResponseData<T>} [callback]
 * @return {*}  {ResponseData<T>[]}
 */
export const simplifiedQueryData = <T>(
  nodes: ReadonlyArray<T extends null ? GraphqlNode : T>,
  callback?: (e: ResponseData<T>) => ResponseData<T>
): ResponseData<T>[] => {
  if (!nodes) return []
  const result = nodes
    .map((node) => {
      const { frontmatter, ...rest } = node as GraphqlNode

      const newNode = {
        ...rest,
        ...frontmatter,
      } as ResponseData<T>

      if (callback) {
        return callback(newNode)
      }

      return newNode
    })
    .filter((e): e is ResponseData<T> => e !== null)
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
 * @return {*}  {HeadingItem[]}
 */
export function flattenSingleItems(items: TableOfContentsItem[], level = 1): HeadingItem[] {
  return items.reduce<HeadingItem[]>((acc, item) => {
    // 如果当前项只有一个items属性，直接处理其子项
    if (Object.keys(item).length === 1 && item.items) {
      return [...acc, ...flattenSingleItems(item.items, level)]
    }

    // 转换为HeadingItem格式
    const headingItem: HeadingItem = {
      key: item.title,
      href: `#${item.title}`,
      title: item.title,
      className: `level-${level}`,
      level: level,
    }

    // 处理子项
    if (item.items) {
      headingItem.children = flattenSingleItems(item.items, level + 1)
    }

    return [...acc, headingItem]
  }, [])
}
