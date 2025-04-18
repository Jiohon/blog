import React, { useMemo } from "react"

import { graphql } from "gatsby"

import BriefHeader from "@/components/BriefHeader"
import PostList from "@/components/PostList"
import SEO from "@/components/SEO"
import ArchiveSidebar from "@/components/Sidebar/ArchiveSidebar"
import { simplifiedQueryData } from "@/utils/helpers"

import { useStyles } from "./styles/_archive.style"

import type { HeadFC, PageProps } from "gatsby"

type ArchiveProps = PageProps<allMdxNodesQuery<"archive"> & Record<"tags", Group>>

/**
 * @description 归档页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const Archive: React.FC<ArchiveProps> = (props) => {
  const { data } = props
  const title = "文章归档"

  const nodes = data.archive.nodes
  const tags = data.tags.group

  const { styles } = useStyles()

  const posts = useMemo(() => simplifiedQueryData(nodes), [nodes])

  return (
    <div className={styles.archive}>
      <div>
        <BriefHeader title={title} />
        <PostList data={posts} />
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
        title="文章归档"
        description="Notes & tutorials & Archives"
        pathName={location.pathname}
      />
    </>
  )
}

export const blogQuery = graphql`
  query ArchivePage {
    archive: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { ne: "page" }, published: { ne: false } } }
    ) {
      nodes {
        ...InformationFragment
      }
    }
    tags: allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      group(field: { frontmatter: { tags: SELECT } }) {
        name: fieldValue
        totalCount
      }
    }
  }
`
