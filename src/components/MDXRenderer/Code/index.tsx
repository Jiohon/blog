import { useStyles } from "./style"

interface CodeHighlightProps {
  children: React.ReactNode
  codeString?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CodeHighlight: React.FC<CodeHighlightProps> = ({ codeString, ...props }) => {
  const { styles } = useStyles()

  return <code {...props} className={styles.code}></code>
}

export default CodeHighlight
