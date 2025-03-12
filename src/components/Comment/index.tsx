import Giscus, { type GiscusProps } from "@giscus/react"

import config from "@/config"
import { useThemeMode } from "@/hooks/useThemeMode"

import { useStyles } from "./style"

interface CommentProps extends Partial<GiscusProps> {
  title?: string
}

const Comment: React.FC<CommentProps> = () => {
  const { styles } = useStyles()

  const { appearance } = useThemeMode()

  if (!config.comment) return <></>

  return (
    <div className={styles.comment}>
      <Giscus
        id="comments"
        repo="jiohon/blog"
        repoId="R_kgDOH-t-Jg"
        category="Announcements"
        categoryId="DIC_kwDOH-t-Js4CnkmW"
        mapping="title"
        reactionsEnabled="1"
        inputPosition="top"
        theme={`noborder_${appearance}`}
        loading="lazy"
      />
    </div>
  )
}

export default Comment
