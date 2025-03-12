import { CodeSandboxOutlined } from "@ant-design/icons"
import stackblitzSdk from "@stackblitz/sdk"
import { Button, Tooltip } from "antd"
import { getParameters } from "codesandbox/lib/api/define"

import StackblitzSvg from "@/components/Icons/Stackblitz"
import { Languages } from "@/utils/code"

import Copy from "./Copy"
import { useStyles } from "./style"

interface TitleProps {
  title: string
  codeString: string
  language: Languages
  highlightRef: React.RefObject<HTMLPreElement>
}

const Title: React.FC<TitleProps> = ({ title, codeString, language, highlightRef }) => {
  const { styles } = useStyles("syntax-preHighlight")

  const handleToStackblitz = () => {
    stackblitzSdk.openProject(
      {
        title: title || "index.js",
        description: "",
        template: "javascript",
        files: {
          "index.html": `<div id="app"></div>`,
          "index.js": codeString,
        },
        settings: {
          compile: {
            trigger: "auto",
            clearConsole: false,
          },
        },
      },
      {
        newWindow: true,
        showSidebar: false,
        devToolsHeight: 100,
      }
    )
  }

  const handleToCodeSandbox = async () => {
    try {
      const parameters = getParameters({
        files: {
          "index.js": {
            content: codeString,
            isBinary: false,
          },
          "package.json": {
            content: JSON.stringify({ dependencies: {} }),
            isBinary: false,
          },
        },
      })

      const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&utm_medium=sandpack`

      window.open(url, "_blank")
    } catch (error) {
      console.error("Error creating sandbox:", error)
    }
  }

  return (
    <div className={styles.TitleBox}>
      <div className={styles.titleStyle}>{title}</div>

      <div className={styles.language}>
        <Tooltip title="在 Stackblitz 中打开">
          <Button
            className={styles.stackblitz}
            size="small"
            type="link"
            onClick={handleToStackblitz}
          >
            <StackblitzSvg />
          </Button>
        </Tooltip>

        <Tooltip title="在 CodeSandbox 中打开">
          <Button
            className={styles.codeSandbox}
            size="small"
            type="link"
            onClick={handleToCodeSandbox}
          >
            <CodeSandboxOutlined style={{ fontSize: "1.1em" }} />
          </Button>
        </Tooltip>

        <span> {language}</span>
      </div>

      <Copy code={codeString} highlightRef={highlightRef} />
    </div>
  )
}

export default Title
