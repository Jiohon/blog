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

interface MenuItem {
  url: string
  title: string
  items?: MenuItem[] // 可选的子项
}

export interface HeadingItem extends AnchorLinkItemProps {
  level: number
  children?: HeadingItem[]
}
/**
 * @description 转换heading格式
 * @date 19/10/2024
 * @param {MenuItem[]} items
 * @param {number} [level=1]
 * @return {*}  {HeadingItem[]}
 */
export function transformHeading(tree: MenuItem[], level = 1): HeadingItem[] {
  return tree.map((item) => {
    const transformedItem: HeadingItem = {
      key: item.title,
      href: `#${item.title}`,
      title: item.title,
      className: `level-${level}`,
      level: level,
    }

    // 递归处理子项
    if (item.items) {
      transformedItem.children = transformHeading(item.items, level + 1)
    }

    return transformedItem
  })
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
