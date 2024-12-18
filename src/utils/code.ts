import { PreHighlightProps } from '@/components/MDXRenderer/Pre'

export type Languages =
  | 'javascript'
  | 'typescript'
  | 'jsx'
  | 'tsx'
  | 'md'
  | 'mdx'
  | 'html'
  | 'kotlin'
  | 'swift'
  | 'rust'
  | 'go'
  | 'java'
  | 'powershell'
  | 'css'
  | 'less'
  | 'sass'
  | 'json'
  | 'nginx'
  | 'typescript-def'
  | 'objective-c'
  | 'c'
  | 'cpp'
  | 'ruby'
  | 'vue'
  | 'angular'
  | 'svelte'
  | 'git'
  | 'gitlab'
  | 'npm'
  | 'pnpm'
  | 'yarn'
  | 'webpack'
  | 'vite'
  | 'vitest'
  | 'babel'
  | 'prettier'
  | 'stylelint'
  | 'docker'
  | 'next'
  | 'netlify'
  | 'gatsby'
  | 'graphql'
  | 'azure'
  | 'coffee'

export type GetLanguageInput = `language-${Languages}` | ''

/**
 * @description 语言映射
 */
export const OVERRIDES = {
  svelte: `html`,
  // javascript: 'js',
  // typescript: 'ts',
} as const

/**
 * @description 语言映射 Key
 */
export type OverridesKeys = keyof typeof OVERRIDES

/**
 * @description 语言映射
 */
export type OverridesValues = (typeof OVERRIDES)[OverridesKeys]

export interface GetLanguageData {
  language: Languages
}

/**
 * 覆盖一种语言到另一种语言，使其具有正确的语法解析
 * @param {string} input
 * @returns {string} 传入输入或覆盖
 * @example
 * getOverrideLanguage('svelte')  => html
 */
export const getOverrideLanguage = (input: Languages): Languages => OVERRIDES?.[input] ?? input

/**
 * 获取语言
 * @param {string} className
 * @returns {string} 语言
 * @example
 * getLanguage('language-js')  => js
 * getLanguage('language-typescript')  => ts
 */
export const getLanguage = (className): GetLanguageData => {
  const language = className.split(`language-`).pop() as Languages

  return { language }
}

export interface CodeNode {
  children: string
  className?: GetLanguageInput
  highlight?: string
  title?: string
  lineNumbers?: boolean

  // [key: string]: any
}

/**
 * @description
 * @date 04/01/2024
 * @export
 * @interface PreNode
 */
export interface PreNode {
  children: {
    props: CodeNode
    type: string
  }
}

/**
 * @description 将来自“code”MDX标记的道具转换为“<Code />”组件的形状
 * @date 02/01/2024
 * @param {*} props
 * @example
 * toCodeParams(props)
 */
export const toCodeParams = (codeProps): PreHighlightProps => {
  const { children, className = ``, ...props } = codeProps

  const { language } = getLanguage(className)

  return {
    children,
    codeString: children,
    language,
    className,
    ...props,
  }
}

/**
 * @description 将来自 "<pre>" MDX标记的道具转换为 “<Code />” 组件的形状
 * @example
 * preToCodeParams(props)
 */
export const ToPreParams = (preProps): PreHighlightProps => {
  const { children, className = ``, ...props } = preProps.children.props

  const { language } = getLanguage(className)

  for (const key in props) {
    if (props[key] === 'true') props[key] = true
    if (props[key] === 'false') props[key] = false
  }

  return {
    children,
    codeString: children.trim(),
    language,
    className,
    ...props,
  }
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
export const calculateLinesToHighlight = (meta: string) => {
  if (!meta) {
    return () => false
  }

  // const lineNumbers = meta.split(`,`).map((v) => v.split(`-`).map(Number))
  const lineNumbers = meta.split(`,`).map((v) => {
    return v.split(`-`).map(Number)
  })
  return (index: number) => {
    const lineNumber = index + 1
    return lineNumbers.some(([start, end]) => (end ? lineNumber >= start && lineNumber <= end : lineNumber === start))
  }
}
