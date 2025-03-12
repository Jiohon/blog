import { CSSProperties, FunctionComponent, ReactNode } from "react"

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

const Link: FunctionComponent<LinkProps> = ({
  className,
  children,
  marker = true,
  extra,
  to,
  ...otherProps
}) => {
  const { styles, cx } = useStyles()

  const ExtraChildren = () => {
    if (typeof extra !== "object") {
      return <span className="extra">{extra}</span>
    }

    return extra
  }

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
            {marker && <span className="inkVisible"></span>}
            {children}
          </div>
          <ExtraChildren />
        </GatsbyLink>
      </div>
    </>
  )
}

export default Link
