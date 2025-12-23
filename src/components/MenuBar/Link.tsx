import type { CSSProperties, FunctionComponent, ReactNode } from "react"

import { Link as GatsbyLink } from "gatsby"

import { useStyles } from "./style"

interface LinkProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  extra?: ReactNode
  marker?: boolean

  activeClassName?: string
  activeStyle?: CSSProperties
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  partiallyActive?: boolean
  replace?: boolean
  to: string
}

const ExtraChildren: React.FC<{ extra: ReactNode }> = ({ extra }) => {
  if (typeof extra !== "object") {
    return <span className="extra">{extra}</span>
  }

  return extra
}

const Link: FunctionComponent<LinkProps> = ({
  className,
  children,
  marker = true,
  extra,
  to,
  ...otherProps
}) => {
  const { styles, cx } = useStyles()

  return (
    <>
      <div className={cx(styles.link, className)}>
        <GatsbyLink
          {...otherProps}
          to={to}
          className="link"
          style={{ paddingInline: marker ? "0" : "0.8em" }}
          activeClassName="active"
        >
          <div>
            {marker && <span className="inkVisible" />}
            {children}
          </div>
          <ExtraChildren extra={extra} />
        </GatsbyLink>
      </div>
    </>
  )
}

export default Link
