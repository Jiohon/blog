import { useMemo, useRef } from "react"

import PrismSyntaxHighlight from "@/components/PrismSyntaxHighlight"
import SandpackSyntaxHighlight from "@/components/SandpackSyntaxHighlight"
import { getPrismjsLanguage } from "@/utils/prismjsLanguages"

import PreContext from "./context"
import { useStyles } from "./style"
import Title from "./Title"

import type { PreContextProps } from "./context"
import type { PreNodeProps } from "./util"
import type { SandboxEnvironment } from "@codesandbox/sandpack-react"

export interface PreHighlightProps extends PreNodeProps {
  codeString: string
  template?: string
  environment?: SandboxEnvironment
}

const PreHighlight: React.FC<PreHighlightProps> = (props) => {
  const { maxRows = 25, template, ...rest } = props

  const { styles } = useStyles("pre")
  const highlightRef = useRef<HTMLPreElement>(null)

  const preContextValue = useMemo<PreContextProps>(() => {
    const language = getPrismjsLanguage(rest?.language)

    return {
      lineNumber: false,
      ...rest,
      language,
      highlightRef,
    }
  }, [rest, highlightRef])

  const maxHeight = useMemo(() => {
    if (maxRows === "infinite") {
      return "none"
    }

    const isNumber = /^\d+$/.test(`${maxRows || ""}`)

    return isNumber ? `${maxRows * 1.6}rem` : "none"
  }, [maxRows])

  if (template) {
    return <SandpackSyntaxHighlight />
  }

  return (
    <PreContext.Provider value={preContextValue}>
      <pre
        ref={highlightRef}
        className={styles.Pre}
        style={{ maxHeight: `calc(${maxHeight} + 2.5rem)` }}
      >
        <Title />

        <PrismSyntaxHighlight />
      </pre>
    </PreContext.Provider>
  )
}

export default PreHighlight
