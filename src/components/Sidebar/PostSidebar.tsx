import { useRef } from "react"

import { Anchor, Card } from "antd"
import { Link } from "gatsby"

import { findItem, scrollToCenter } from "@/utils/func"
import { findMaxLevel } from "@/utils/helpers"
import type { HeadingItem } from "@/utils/helpers"
import type { Language } from "@/utils/prismjsLanguages"

import MenuBar from "../MenuBar"
import Sticky from "../Sticky"
import SVGIcon from "../SvgIcon"

import { useStyles } from "./style"

interface PostSidebarProps {
  date?: string
  icon: Language
  headings: HeadingItem[]
  posts: PathFrontmatter[]
}

/**
 * @description 文章详细信息侧边
 */

const PostSidebar: React.FC<PostSidebarProps> = ({ icon, headings, posts }) => {
  const { styles } = useStyles(findMaxLevel(headings))
  const anchorRef = useRef<HTMLDivElement>(null)

  const latest = posts.slice(0, 6)

  const handleChange = (currentActiveLink: string) => {
    const currentHeading = findItem(headings, { href: currentActiveLink })

    const anchorItem = document
      .querySelector(`.${currentHeading?.href.replace("#", "anchor-")}`)
      ?.querySelector("a")

    if (anchorRef.current && anchorItem) {
      scrollToCenter(anchorRef.current, anchorItem)
    }

    if (currentHeading) {
      history.replaceState(null, "", currentHeading?.href)
    } else {
      history.replaceState(null, "", window.location.pathname + window.location.search)
    }
  }

  return (
    <Sticky>
      <SVGIcon id={icon} width="8em" height="8em" style={{ marginBlock: "0 1rem" }}></SVGIcon>
      {/* <Card className={styles.card}>
          <h2>About me</h2>
        </Card> */}

      <Card className={styles.card}>
        <MenuBar>
          <MenuBar.Title>目录</MenuBar.Title>
          <div ref={anchorRef} className={styles.anchorScroll}>
            <Anchor
              className={styles.anchor}
              offsetTop={90}
              affix={false}
              replace
              items={headings}
              onChange={handleChange}
            />
          </div>
        </MenuBar>
      </Card>

      <Card className={styles.card}>
        <MenuBar>
          <MenuBar.Title>近期发布</MenuBar.Title>
          {latest.map((l) => (
            <Link className={styles.latest} to={l.path} key={l.slug}>
              <SVGIcon id={l.icon} width="1.8em" height="1.8em"></SVGIcon>
              <div className="title">{l.title.split("-")[1] || l.title}</div>
            </Link>
          ))}
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default PostSidebar
