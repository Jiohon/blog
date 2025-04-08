import { memo, useContext, useEffect, useMemo, useState } from "react"

import { omit } from "lodash"
import { Highlight, themes } from "prism-react-renderer"

import PreContext from "@/components/MDXRenderer/Pre/context"
import { useThemeMode } from "@/hooks/useThemeMode"
import { calculateLinesToHighlight } from "@/utils/helpers"

import { useStyles } from "./style"

// 将驼峰命名转换为连字符格式的函数
const camelToKebab = (obj: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = {}
  Object.keys(obj).forEach((key) => {
    const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase()
    result[kebabKey] = typeof obj[key] === "boolean" ? String(obj[key]) : obj[key]
  })
  return result
}

const PrismSyntaxHighlight = memo(() => {
  const context = useContext(PreContext)
  const { codeString, language, highlight, lineNumber, codeUrl } = context || {}

  const { styles, cx } = useStyles("prism")
  const { appearance } = useThemeMode()
  const [code, setCode] = useState(codeString)

  const shouldHighlightLine = calculateLinesToHighlight(highlight)

  const theme = useMemo(
    () => (appearance === "dark" ? themes.oneDark : themes.oneLight),
    [appearance]
  )

  const attributes = useMemo(() => {
    const omittedProps = omit(context, ["className", "codeString", "highlightRef"])
    return camelToKebab(omittedProps)
  }, [context])

  useEffect(() => {
    getRemoteCode({ codeString, codeUrl }).then((data) => {
      setCode(data)
    })
  }, [codeString, codeUrl])

  return (
    <>
      <Highlight code={code} language={language} theme={theme}>
        {({ tokens, getLineProps, getTokenProps }) => {
          return (
            <code className={cx(context?.className, styles.PrismCode)} {...attributes}>
              {lineNumber && (
                <div className={styles.lineNumbers}>
                  {tokens.map((line, i) => (
                    <span
                      key={`number-${i}`}
                      className={cx("number", shouldHighlightLine(i) && styles.LineHighlight)}
                      style={{ opacity: highlight ? 0.5 : 1 }}
                    >
                      {i + 1}
                      {shouldHighlightLine(i)}
                    </span>
                  ))}
                </div>
              )}
              <div className={styles.lines}>
                {tokens.map((line, i) => (
                  <div
                    key={`line-${i}`}
                    {...getLineProps({ line })}
                    className={cx("line", shouldHighlightLine(i) && styles.LineHighlight)}
                    style={{
                      paddingInlineStart: lineNumber ? "0" : "1.3rem",
                      opacity: highlight ? 0.5 : 1,
                    }}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </div>
            </code>
          )
        }}
      </Highlight>
    </>
  )
})

export const getRemoteCode = async ({ codeString, codeUrl }) => {
  if (!codeUrl) {
    return codeString
  }
  try {
    const response = await fetch(codeUrl)

    return response.text()
  } catch (error) {
    console.error("Failed to fetch remote code:", error)
    return codeString
  }
}

export default PrismSyntaxHighlight
