import type { AnchorHTMLAttributes } from "react"
import React from "react"

import LinkSvg from "@/components/Icons/ALink"

import { useStyles } from "./style"

export interface AProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
}

const A: React.FC<AProps> = (props) => {
  const { styles } = useStyles()

  return (
    <a className={styles.a} {...props} target="_blank">
      {props.children}

      <LinkSvg className="svg" />
    </a>
  )
}

export default A
