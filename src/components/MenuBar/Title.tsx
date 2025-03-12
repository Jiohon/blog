import { CSSProperties, FunctionComponent, ReactNode } from "react"

import { useStyles } from "./style"

interface HeadProps {
  className?: string
  style?: CSSProperties
  children: ReactNode
}

const Head: FunctionComponent<HeadProps> = ({ className, children, ...otherProps }) => {
  const { styles, cx } = useStyles()

  return (
    <div className={cx(styles.title, className)} {...otherProps}>
      {children}
    </div>
  )
}

export default Head
