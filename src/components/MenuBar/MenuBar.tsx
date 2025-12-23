import type { CSSProperties, FunctionComponent, ReactNode } from "react"

import { useStyles } from "./style"

interface MenuBarProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const MenuBar: FunctionComponent<MenuBarProps> = ({ className, children, ...otherProps }) => {
  const { styles, cx } = useStyles()

  return (
    <>
      <div className={cx(styles.menuBar, className)} {...otherProps}>
        {children}
      </div>
    </>
  )
}

export default MenuBar
