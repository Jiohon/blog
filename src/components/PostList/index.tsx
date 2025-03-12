import React, { useMemo } from "react"

import { Link } from "gatsby"

import ArrowRight from "@/components/Icons/ArrowRight"
import SVGIcon from "@/components/SvgIcon"

import { useStyles } from "./style"

interface PostListProps {
  data: Frontmatter[]
}

/**
 * @description 文章列表
 */
const PostList: React.FC<PostListProps> = ({ data }) => {
  const { styles } = useStyles()
  const postByYear = useMemo(() => {
    const collection: YearListData = {}

    data.forEach((item) => {
      const year = item.date?.split(", ")[1]

      collection[year] = [...(collection[year] || []), item]
    })

    return collection
  }, [data])

  const years = useMemo(() => Object.keys(postByYear).reverse(), [postByYear])

  return (
    <>
      {years.map((year) => (
        <div className={styles.post} key={year}>
          <div className={styles.year}>{year}</div>
          {postByYear[year].map((node) => (
            <Link className={styles.link} to={`/${node.slug}`} key={node.slug}>
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
