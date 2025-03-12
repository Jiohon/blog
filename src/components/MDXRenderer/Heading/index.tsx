import { useRef } from "react"

import { Typography } from "antd"

import { useStyles } from "./style"

const { Title, Link } = Typography

type HeadingProps = {
  id: string
  children: React.ReactNode
}

/* eslint-disable */
const heading =
  (level) =>
  ({ children }: HeadingProps) => {
    const { styles, cx } = useStyles()
    const linkRef = useRef<HTMLElement>(null)
    const ID = children

    const handleClick = async (e: React.MouseEvent<HTMLElement>, href) => {
      // e.preventDefault()
      const { origin, pathname } = window.location

      await linkRef.current?.scrollIntoView({ behavior: 'smooth' })
      history.replaceState(null, '', `${origin}${pathname}#${href}`)
    }

    return (
      <Title
        level={level}
        id={`#${children}`}
        className={cx(styles.heading, styles.levelStyle, `h${level}`)}
      >
        <Link
          ref={linkRef}
          id={`${children}`}
          className={styles.link}
          onClick={(e) => handleClick(e, children)}
        >
          #
        </Link>

        {children}
      </Title>
    )
  }

const headings = {
  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),
}

export default headings
