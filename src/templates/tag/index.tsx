import React from "react"

import { graphql } from "gatsby"

import BriefHeader from "@/components/BriefHeader"
import PostList from "@/components/PostList"
import SEO from "@/components/SEO"
import ArchiveSidebar from "@/components/Sidebar/ArchiveSidebar"
import { simplifiedQueryData } from "@/utils/helpers"

import { useStyles } from "./_style"

import type { HeadFC, PageProps } from "gatsby"

type TagTemplateProps = PageProps<
  allMdxNodesQuery<"posts"> & Record<"tags", Group>,
  { tag: string }
>

/**
 * @description 标签页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const TagTemplate: React.FC<TagTemplateProps> = (props) => {
  const { data, pageContext } = props
  const { styles } = useStyles()

  const totalCount = data.posts.totalCount
  const nodes = data.posts.nodes
  const tags = data.tags.group
  const message = totalCount === 1 ? " Post tagged:" : " Posts tagged:"
  const { tag } = pageContext

  const frontmatterList = simplifiedQueryData(nodes)

  return (
    <div className={styles.tag}>
      <div>
        <BriefHeader highlight={totalCount} description={message} title={tag} />
        <PostList list={frontmatterList} />
      </div>
      <ArchiveSidebar tags={tags} />
    </div>
  )
}

export default TagTemplate

export const Head: HeadFC<allMdxNodesQuery<"tags"> & MdxNodesQuery, TagData> = (props) => {
  const { location, pageContext } = props
  const { tag } = pageContext

  return (
    <>
      <SEO title={`posts tagged: ${tag}`} description="Post tagged" pathName={location.pathname} />
    </>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String, $published: [Boolean] = [true]) {
    posts: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { in: $published } } }
    ) {
      totalCount
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
