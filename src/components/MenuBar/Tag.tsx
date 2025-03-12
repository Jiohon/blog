import { CSSProperties, FunctionComponent, ReactNode } from "react"

import { Link as GatsbyLink } from "gatsby"

import { useStyles } from "./style"

interface TagProps {
  className?: string
  style?: CSSProperties
  to: string
  children: ReactNode
}

const Tag: FunctionComponent<TagProps> = ({ to, children, className, ...otherProps }) => {
  const { styles, cx, prefixCls } = useStyles()

  return (
    <>
      <GatsbyLink
        className={cx(`${prefixCls}-tag`, styles.tag, className)}
        activeClassName={cx(`${prefixCls}-tag-checked`)}
        to={to}
        {...otherProps}
      >
        {children}
      </GatsbyLink>
    </>
  )
}

export default Tag
