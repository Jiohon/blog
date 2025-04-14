import React, { HTMLAttributes, useMemo, useRef } from "react"

import { Typography } from "antd"

import { useHeading } from "@/context/HeadingProvider"
import { findItem } from "@/utils/func"

import { useStyles } from "./style"

const { Title, Link } = Typography

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  id?: string
  level: 1 | 2 | 3 | 4 | 5 | undefined
  children?: React.ReactNode
}

/* eslint-disable */
const Heading: React.FC<HeadingProps> = ({ children, level, ...props }) => {
  const { styles, cx } = useStyles()
  const headings = useHeading()
  const linkRef = useRef<HTMLElement>(null)

  const ID = useMemo(() => {
    const currentHeading = findItem(headings, { title: children })
    return currentHeading?.href
  }, [children, headings])

  const handleClick = () => {
    linkRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Title
      level={level}
      id={ID}
      className={cx(styles.heading, styles.levelStyle, `h${level}`)}
      {...props}
    >
      <Link
        ref={linkRef}
        id={`${ID}`.replace("#", "")}
        className={styles.link}
        onClick={handleClick}
      >
        #
      </Link>

      {children}
    </Title>
  )
}

const headings = {
  h1: (props) => {
    return <Heading level={1} {...props}></Heading>
  },
  h2: (props) => {
    return <Heading level={2} {...props}></Heading>
  },
  h3: (props) => {
    return <Heading level={3} {...props}></Heading>
  },
  h4: (props) => {
    return <Heading level={4} {...props}></Heading>
  },
  h5: (props) => {
    return <Heading level={5} {...props}></Heading>
  },
  h6: (props) => {
    return <Heading level={6} {...props}></Heading>
  },
}

export default headings
