import React from "react"

import { Link } from "gatsby"

import SevenSegmentDisplay from "@/components/SevenSegmentDisplay"
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
          <div className={styles.year} aria-label={`${year} 年`}>
            <SevenSegmentDisplay
              value={Number(year)}
              minLength={4}
              digitSize={16}
              digitSpacing={3}
              segmentThickness={2}
              segmentSpacing={1}
              segmentActiveColor="#6c4cff"
              segmentInactiveColor="transparent"
              backgroundColor="transparent"
              padding={0}
              glow
            />
          </div>
          <div className={styles.content}>
            {postByYear[year].map((node) => (
              <Link className={styles.link} to={node.path} key={node.slug}>
                <SVGIcon id={node.icon} width="3em" height="3em" />
                <div className="infos">
                  <h5>{node.title}</h5>
                  <time>{node.date}</time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default PostList
