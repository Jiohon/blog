import { useRef } from "react"

import PrismSyntaxHighlight from "@/components/PrismSyntaxHighlight"
import SandpackSyntaxHighlight from "@/components/SandpackSyntaxHighlight"
import { CodeNode, GetLanguageData } from "@/utils/code"

import { useStyles } from "./style"
import Title from "./Title"

import type { SandboxEnvironment } from "@codesandbox/sandpack-react"

export interface PreHighlightProps extends GetLanguageData, CodeNode {
  codeString: string
  template?: string
  environment?: SandboxEnvironment
}

const PreHighlight: React.FC<PreHighlightProps> = (props) => {
  const { codeString, language = "javascript", title = "", template, environment } = props
  const { styles } = useStyles("pre")

  const highlightRef = useRef<HTMLPreElement>(null)

  const sandpackFiles = {
    "index.js": codeString,
  }

  const setup = {
    entry: "index.tsx",
    environment,
  }

  if (template) {
    return (
      <SandpackSyntaxHighlight codeString={codeString} files={sandpackFiles} customSetup={setup} />
    )
  }

  return (
    <>
      <pre ref={highlightRef} className={styles.Pre}>
        <Title
          title={title}
          codeString={codeString}
          language={language}
          highlightRef={highlightRef}
        />

        <PrismSyntaxHighlight {...props} />
      </pre>
    </>
  )
}

export default PreHighlight
