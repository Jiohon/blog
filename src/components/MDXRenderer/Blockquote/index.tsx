import { useStyles } from "./style"

const Blockquote: React.FC<React.BlockquoteHTMLAttributes<HTMLQuoteElement>> = (props) => {
  const { styles } = useStyles()
  return <blockquote {...props} className={styles.blockquote} />
}

export default Blockquote
