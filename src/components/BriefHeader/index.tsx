import React from "react"

import { useStyles } from "./style"

/**
 * @description 简介
 */

interface BriefHeaderProps {
  title?: React.ReactNode
  greeting?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
}

const BriefHeader: React.FC<BriefHeaderProps> = ({ title, greeting, description, children }) => {
  const { styles } = useStyles()

  return (
    <div className={styles.briefHeader}>
      {greeting && <div className={styles.greeting}>{greeting}</div>}
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
      {children && children}
    </div>
  )
}

export default BriefHeader
