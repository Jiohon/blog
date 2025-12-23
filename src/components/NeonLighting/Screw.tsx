import { useStyles } from "./style"

const Screw: React.FC<{ className: string }> = ({ className }) => {
  const { styles, cx } = useStyles()

  return <div className={cx(className, styles.screw)} />
}

export default Screw
