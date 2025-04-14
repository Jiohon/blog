import { CSSProperties, FunctionComponent, ReactNode } from "react"

import { useStyles } from "./style"

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  style?: CSSProperties
  children: ReactNode
  extra?: ReactNode
  marker?: boolean
}

const Text: FunctionComponent<TextProps> = ({
  className,
  children,
  marker = true,
  extra,
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
    <div className={cx(styles.text, className)} {...otherProps}>
      <div>
        {marker && <span className="inkVisible"></span>}
        {children}
      </div>
      <ExtraChildren />
    </div>
  )
}

export default Text
