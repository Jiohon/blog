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

  return (
    <Sticky>
      <Card bordered={false} className={styles.card}>
        <MenuBar>
          <MenuBar.Title>标签</MenuBar.Title>
          {Tags.map((t) => (
            <MenuBar.Tag key={t.name} to={t.path} className={styles.tag}>
              #{t.name}
            </MenuBar.Tag>
          ))}
        </MenuBar>
      </Card>
    </Sticky>
  )
}

export default ArchiveSidebar
