import { Anchor, Card } from "antd"
import { Link } from "gatsby"

import type { Languages } from "@/utils/code"
import { findMaxLevel } from "@/utils/helpers"
import type { HeadingItem } from "@/utils/helpers"

import MenuBar from "../MenuBar"
import Sticky from "../Sticky"
import SVGIcon from "../SvgIcon"

import { useStyles } from "./style"

interface PostSidebarProps {
  date?: string
  icon: Languages
  headings: HeadingItem[]
  posts: Frontmatter[]
}

/**
 * @description 文章详细信息侧边
 */

const PostSidebar: React.FC<PostSidebarProps> = ({ icon, headings, posts }) => {
  const { styles } = useStyles(findMaxLevel(headings))

  const latest = posts.slice(0, 6)

  const handleChange = (currentActiveLink: string) => {
    if (currentActiveLink) {
      // @ts-expect-error 替换锚点
      history.replaceState(null, null, currentActiveLink)
    } else {
      // @ts-expect-error 清空锚点
      history.replaceState(null, null, window.location.pathname + window.location.search)
    }
  }

  return (
    <Sticky>
      <SVGIcon id={icon} width="8em" height="8em" style={{ marginBlock: "0 1rem" }}></SVGIcon>
      {/* <Card bordered={false} className={styles.card}>
          <h2>About me</h2>
        </Card> */}

      <Card className={styles.card}>
        <MenuBar>
          <MenuBar.Title>目录</MenuBar.Title>
          <Anchor
            className={styles.anchor}
            offsetTop={90}
            affix={false}
            replace
            items={headings}
            onChange={handleChange}
          />
        </MenuBar>
      </Card>

      <Card className={styles.card}>
        <MenuBar>
          <MenuBar.Title>近期发布</MenuBar.Title>
          {latest.map((l) => (
            <Link className={styles.latest} to={`/${l.slug}`} key={l.slug}>
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
