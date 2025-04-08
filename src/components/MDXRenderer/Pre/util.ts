import { PreHighlightProps } from "@/components/MDXRenderer/Pre"
import type { Language } from "@/utils/prismjsLanguages"

export type LanguageInput = `language-${Language}` | `language-${string}`

export interface PreNodeProps {
  language: Language
  title?: string
  maxRows?: number | "infinite"
  className?: LanguageInput & string
  highlight?: string
  lineNumber?: boolean
  codeUrl?: string
}

/**
 * @description 转换Code组件的props
 * @date 02/01/2024
 * @param {*} props
 * @example
 * toCodeParams(props)
 */
export const toCodeParams = (codeProps): PreHighlightProps => {
  const { children, className, ...props } = codeProps

  return {
    children,
    codeString: children,
    className,
    ...props,
  }
}

/**
 * @description 转换Pre组件的props
 * @example
 * ToPreParams(props)
 */
export const ToPreParams = (preProps): PreHighlightProps => {
  const { children, className, ...props } = preProps.children.props

  for (const key in props) {
    if (props[key] === "true") props[key] = true
    if (props[key] === "false") props[key] = false
  }

  return {
    children,
    codeString: children.trim(),
    className,
    ...props,
  }
}
