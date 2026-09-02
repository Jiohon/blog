import React from "react"

import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"

import PostList from "@/components/PostList"
import SEO from "@/components/SEO"
import ArchiveSidebar from "@/components/Sidebar/ArchiveSidebar"
import { simplifiedQueryData } from "@/utils/helpers"

import { useStyles } from "./_style"

type ArchiveProps = PageProps<allMdxNodesQuery<"archive"> & Record<"tags", Group>>

/**
 * @description 归档页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const Archive: React.FC<ArchiveProps> = (props) => {
  const { data } = props
  const title = "Archives"

  const tags = data.tags.group

  const { styles } = useStyles()

  const frontmatterList = simplifiedQueryData(data.archive.nodes)

  return (
    <div className={styles.archive}>
      <div>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>ARCHIVE / NOTES</span>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              {title}
              <span>.</span>
            </h1>
            <p className={styles.heroDescription}>过往的记录</p>
          </div>
          <div className={styles.heroMeta}>
            <span>{String(frontmatterList.length).padStart(2, "0")} published notes</span>
            <span>Browse by year</span>
          </div>
        </header>
        <PostList list={frontmatterList} />
      </div>

      <ArchiveSidebar tags={tags} />
    </div>
  )
}

export default Archive

export const Head: HeadFC = (props) => {
  const { location } = props

  return (
    <>
      <SEO
        title="Archives"
        description="Notes & tutorials & Archives"
        pathName={location.pathname}
      />
    </>
  )
}

export const blogQuery = graphql`
  query ArchivePage($published: [Boolean] = [true]) {
    archive: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { ne: "page" }, published: { in: $published } } }
    ) {
      nodes {
        ...InformationFragment
      }
    }
    tags: allMdx(filter: { frontmatter: { published: { in: $published } } }) {
      group(field: { frontmatter: { tags: SELECT } }) {
        name: fieldValue
        totalCount
      }
    }
  }
`
