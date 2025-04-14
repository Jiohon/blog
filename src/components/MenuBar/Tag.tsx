import { FunctionComponent } from "react"

import { Link as GatsbyLink } from "gatsby"

import { useStyles } from "./style"

import type { GatsbyLinkProps } from "gatsby"

type TagProps = Omit<GatsbyLinkProps<string>, "ref">

const Tag: FunctionComponent<TagProps> = ({ to, children, className, ...otherProps }) => {
  const { styles, cx, prefixCls } = useStyles()

  return (
    <>
      <GatsbyLink
        state={to}
        className={cx(`${prefixCls}-tag`, styles.tag, className)}
        to={to}
        getProps={({ isCurrent }) => ({
          className: cx(
            `${prefixCls}-tag`,
            styles.tag,
            className,
            isCurrent ? `${prefixCls}-tag-checked` : ""
          ),
        })}
        {...otherProps}
      >
        {children}
      </GatsbyLink>
    </>
  )
}

export default Tag
