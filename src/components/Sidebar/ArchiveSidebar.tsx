import { navigate } from "gatsby"

import { Card } from "antd"

import MenuBar from "../MenuBar"
import Sticky from "../Sticky"
import { useStyles } from "./style"

interface ArchiveSidebarProps {
  tags: GroupItem[]
}

/**
 * @description 归档页面 - 侧边类别、标签信息
 */
const ArchiveSidebar: React.FC<ArchiveSidebarProps> = ({ tags }) => {
  const { styles } = useStyles()

  const Tags = tags.map((tag) => ({ ...tag, path: `/tags/${tag.name}/` }))

  const handleClickTag = (e: React.MouseEvent<HTMLAnchorElement>, row: GroupItem) => {
    e.preventDefault()
    if (row.path === location.pathname) {
      navigate("/archive")

      return
    }
    navigate(row.path)
  }

  return (
    <Sticky>
      <Card className={styles.card}>
        <MenuBar>
          <MenuBar.Title>标签</MenuBar.Title>
          {Tags.map((t) => (
            <MenuBar.Tag
              key={t.name}
              to={t.path}
              onClick={(e) => handleClickTag(e, t)}
              className={styles.tag}
            >
              #{t.name}
            </MenuBar.Tag>
          ))}
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default ArchiveSidebar
