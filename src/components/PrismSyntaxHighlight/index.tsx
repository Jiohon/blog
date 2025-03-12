import React, { memo, useEffect, useMemo, useState } from "react"

import { Highlight, themes } from "prism-react-renderer"

import { useThemeMode } from "@/hooks/useThemeMode"
import { calculateLinesToHighlight, CodeNode, GetLanguageData } from "@/utils/code"

import { useStyles } from "./style"

export interface PrismSyntaxHighlightProps extends GetLanguageData, CodeNode {
  codeString: string
}

const PrismSyntaxHighlight: React.FC<PrismSyntaxHighlightProps> = memo((props) => {
  const {
    codeString,
    language = "javascript",
    highlight = "",
    lineNumbers = true,
    maxRows = 20,
  } = props
  const { styles, cx } = useStyles("prism")
  const { appearance } = useThemeMode()
  const [code, setCode] = useState(codeString)

  const maxHeight = useMemo(
    () => (maxRows === "infinite" ? "none" : `${maxRows * 22}px`),
    [maxRows]
  )

  const shouldHighlightLine = calculateLinesToHighlight(highlight)

  const theme = useMemo(
    () => (appearance === "dark" ? themes.oneDark : themes.oneLight),
    [appearance]
  )

  useEffect(() => {
    getRemoteCode(props).then((data) => {
      setCode(data)
    })
  }, [props])

  return (
    <Highlight code={code} language={language} theme={theme}>
      {({ tokens, getLineProps, getTokenProps }) => {
        return (
          <div className={styles.PrismScorll} style={{ maxHeight: maxHeight }}>
            <code className={styles.PrismCode}>
              {lineNumbers && (
                <div className={styles.lineNumbers}>
                  {tokens.map((line, i) => (
                    <span
                      key={`number-${i}`}
                      className={cx("number", shouldHighlightLine(i) && styles.LineHighlight)}
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
                    style={{ paddingInlineStart: lineNumbers ? "0" : "1.2rem" }}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </div>
            </code>
          </div>
        )
      }}
    </Highlight>
  )
})

export const getRemoteCode = async ({ codeString, fetch: fetchUrl }: PrismSyntaxHighlightProps) => {
  if (!fetchUrl) {
    return codeString
  }
  try {
    const response = await fetch(fetchUrl)

    return response.text()
  } catch (error) {
    return codeString
  }
}

export default PrismSyntaxHighlight
