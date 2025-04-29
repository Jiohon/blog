import React, { lazy, Suspense, useContext } from "react"

import { Skeleton } from "antd"

import PreContext from "@/components/MDXRenderer/Pre/context"
import { useThemeMode } from "@/hooks/useThemeMode"

import { getReactFiles } from "./files"
import { useStyles } from "./style"

// import type { SandpackProps } from "@codesandbox/sandpack-react"

const OriginSandpack = lazy(() => import("./Sandpack"))

const SandpackFallback = () => {
  const { styles } = useStyles()

  return (
    <div className={styles.fallback}>
      <Skeleton.Node active style={{ height: 300, width: "100%" }}>
        <span className={styles.placeholder}>Loading Demo...</span>
      </Skeleton.Node>
    </div>
  )
}

// interface SandpackSyntaxHighlightProps extends SandpackProps {
//   codeString: string
// }

// const SandpackSyntaxHighlight: React.FC< React.PropsWithChildren<SandpackSyntaxHighlightProps> > = () => {
const SandpackSyntaxHighlight = () => {
  const context = useContext(PreContext)
  const { codeString, lineNumber } = context || {}

  const { styles, theme: token } = useStyles()
  const { appearance } = useThemeMode()

  const insideOptions = {
    activeFile: "index.tsx",
    editorWidthPercentage: 60,
    showLineNumbers: lineNumber,
    showConsoleButton: true,
    showConsole: false,
    showRefreshButton: true,
    editorHeight: "400px",
    autorun: true,
  }

  // const sandpackFiles = {
  //   "index.js": codeString,
  // }

  // const setup = {
  //   entry: "index.tsx",
  //   environment,
  // }

  const theme = {
    colors: {
      surface1: token.colorBgElevated,
      surface2: "none",
    },
    font: {
      size: "0.95rem",
      mono: "SF Mono",
      lineHeight: "22px",
    },
  }

  const insideFiles = getReactFiles(appearance === "dark", codeString)

  return (
    <Suspense fallback={<SandpackFallback />}>
      <OriginSandpack
        className={styles.sandpack}
        theme={theme}
        // @ts-expect-error Temporary
        options={insideOptions}
        {...insideFiles}
      />
    </Suspense>
  )
}

export default SandpackSyntaxHighlight
