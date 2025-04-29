import React from "react"

import { Link } from "gatsby"

import ArrowRight from "@/components/Icons/ArrowRight"
import SVGIcon from "@/components/SvgIcon"
import { groupPostsByYear } from "@/utils/helpers"

import { useStyles } from "./style"

interface PostListProps {
  list: PathFrontmatter[]
}

/**
 * @description 文章列表
 */
const PostList: React.FC<PostListProps> = ({ list }) => {
  const { styles } = useStyles()

  const postByYear = groupPostsByYear(list)

  const years = Object.keys(postByYear).reverse()

  return (
    <>
      {years.map((year) => (
        <div className={styles.post} key={year}>
          <div className={styles.year}>{year}</div>
          {postByYear[year].map((node) => (
            <Link className={styles.link} to={node.path} key={node.slug}>
              <SVGIcon id={node.icon} width="3em" height="3em"></SVGIcon>
              <div className="infos">
                <h5>{node.title}</h5>
                <time>{node.date}</time>
              </div>

              <ArrowRight />
            </Link>
          ))}
        </div>
      ))}
    </>
  )
}

export default PostList
