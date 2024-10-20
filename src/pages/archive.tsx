import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'

import ArticleList from '@/components/ArticleList'
import BriefHeader from '@/components/BriefHeader'
import SEO from '@/components/SEO'
import ArchiveSidebar from '@/components/Sidebar/ArchiveSidebar'
import { simplifiedQueryData } from '@/utils/helpers'
import { useStyles } from './styles/_archive.style'

type ArchiveProps = PageProps<allMdxNodesQuery<'archive'> & Record<'tags', Group>>

/**
 * @description 归档页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const Archive: React.FC<ArchiveProps> = (props) => {
  const { data } = props
  const title = '文章归档'

  const nodes = data.archive.nodes
  const tags = data.tags.group

  const { styles } = useStyles()

  const articles = useMemo(() => simplifiedQueryData(nodes), [nodes])

  return (
    <div className={styles.archive}>
      <div>
        <BriefHeader title={title} />
        <ArticleList data={articles} />
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
      <SEO title="文章归档" description="Notes & tutorials & Archives" pathName={location.pathname} />
    </>
  )
}

export const blogQuery = graphql`
  query ArchivePage {
    archive: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "article" }, published: { ne: false } } }
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
