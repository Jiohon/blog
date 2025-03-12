import visit from "unist-util-visit"

import type { Plugin, Transformer } from "unified"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseMetaProps = (str): Record<string, any> => {
  const props = {}
  // 正则表达式捕获完整的键值对、简写属性和花括号内容
  const regex = /(\w+)(?:=({[^}]*}|"[^"]*"|\S+))?|({[^}]*})/g
  let match

  while ((match = regex.exec(str)) !== null) {
    if (match[1]) {
      // 处理键值对或简写形式
      const key = match[1]
      let value = match[2]

      if (value === undefined) {
        // 如果属性值不存在，默认赋值为 true（简写属性）
        value = true
      }

      // 去除引号的字符串
      if ([/^\{([^}]+)\}$/, /^"([^}]+)"$/].some((i) => i.test(value))) {
        value = value.replace(/^[{|"|']([^}]+)[}|"|']$/, "$1")
      }

      // 布尔值处理
      // if (['true', '{true}'].includes(value)) {
      //   value = true
      // } else if (['false', '{false}'].includes(value)) {
      //   value = false
      // }

      props[key] = value
    } else if (match[3]) {
      const bracesMatch = match[3].match(/^\{([^}]+)\}$/)

      if (bracesMatch) {
        props["highlight"] = bracesMatch[1]
      }
    }
  }

  return props
}

const transformer: Transformer = (ast) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visit(ast, `element`, (node: any) => {
    if (node.tagName === `code` && node.data && node.data.meta) {
      const metaProps = parseMetaProps(node.data.meta)

      node.properties = { ...node.properties, ...metaProps }
    }
  })
}

const rehypeMetaAsAttributes: Plugin = () => transformer

export default rehypeMetaAsAttributes
