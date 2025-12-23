import { useStyles } from "./style"

const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (props) => {
  const { styles } = useStyles()

  return <table {...props} className={styles.table} />
}

export default Table
