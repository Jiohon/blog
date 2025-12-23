import visit from "unist-util-visit"

import type { Plugin, Transformer } from "unified"

/**
 * 解析元数据属性
 * @param node - 节点对象
 * @returns 解析后的属性对象
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseMetaProps = (node: any): Record<string, any> => {
  // 快速返回空对象，如果条件不满足
  if (node?.tagName !== "code" || !node?.data?.meta) {
    return {}
  }

  const { meta } = node.data
  const props: Record<string, unknown> = {}

  // 优化正则表达式捕获键值对、简写属性和花括号内容
  const META_PROPS_REGEX = /(\w+)(?:=({[^}]*}|"[^"]*"|\S+))?|({[^}]*})/g

  meta.replace(
    META_PROPS_REGEX,
    (_: string, key?: string, value?: string, bracesContent?: string) => {
      if (key) {
        // 处理键值对或简写形式
        if (value === undefined) {
          props[key] = true // 简写属性默认为true
        } else if (typeof value === "string") {
          // 去除引号和花括号，处理布尔值
          if (/^[{"]/.test(value)) {
            value = value.replace(/^[{|"|']([^}]+)[}|"|']$/, "$1")
          }

          // 布尔值处理
          if (value === "true") {
            props[key] = true
          } else if (value === "false") {
            props[key] = false
          } else {
            props[key] = value
          }
        } else {
          props[key] = value
        }
      } else if (bracesContent) {
        // 处理高亮语法简写 ({2-4}) 的情况
        const highlightValue = bracesContent.match(/^\{([^}]+)\}$/)?.[1]
        if (highlightValue) {
          props.highlight = highlightValue
        }
      }

      return ""
    }
  )

  return props
}

/**
 * rehype插件转换器
 */
const transformer: Transformer = (ast) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visit(ast, "element", (node: any) => {
    if (node?.tagName !== "code") {
      return
    }

    // 节点属性合并
    const props = node.properties || {}
    const metaProps = parseMetaProps(node)
    const className = Array.isArray(props.className) ? props.className : []

    // 更新节点属性
    node.properties = {
      ...props,
      ...metaProps,
      language: className[0]?.split("language-").pop() || "",
      className: [...className, metaProps.className].filter(Boolean),
    }
  })
}

/**
 * rehype插件函数及Gatsby配置
 */
const rehypeMetaAsAttributes: Plugin = () => transformer
export const setParserPlugins = () => [[rehypeMetaAsAttributes, {}]]
export default rehypeMetaAsAttributes
