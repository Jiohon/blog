import type { CSSProperties, FunctionComponent, ReactNode } from "react"

import { useStyles } from "./style"

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  style?: CSSProperties
  children: ReactNode
  extra?: ReactNode
  marker?: boolean
}

const ExtraChildren: React.FC<{ extra: ReactNode }> = ({ extra }) => {
  if (typeof extra !== "object") {
    return <span className="extra">{extra}</span>
  }

  return extra
}

const Text: FunctionComponent<TextProps> = ({
  className,
  children,
  marker = true,
  extra,
  ...otherProps
}) => {
  const { styles, cx } = useStyles()

  return (
    <div className={cx(styles.text, className)} {...otherProps}>
      <div>
        {marker && <span className="inkVisible" />}
        {children}
      </div>
      <ExtraChildren extra={extra} />
    </div>
  )
}

export default Text
