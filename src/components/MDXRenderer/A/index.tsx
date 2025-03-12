import LinkSvg from "@/components/Icons/ALink"

import { useStyles } from "./style"

interface AProps {
  children: string | React.ReactNode
}

const A: React.FC<AProps> = (props) => {
  const { styles } = useStyles()

  return (
    <a className={styles.a} {...props} target="_blank">
      {props.children}

      <LinkSvg className="svg" />
    </a>
  )
}

export default A
