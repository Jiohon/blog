import type { HeadFC, PageProps } from "gatsby"
import { graphql, navigate } from "gatsby"

import { Space, Tag, Tooltip, Typography } from "antd"
import dayjs from "dayjs"

import Comment from "@/components/Comment"
import Calendar from "@/components/Icons/Calendar"
import MDXRenderer from "@/components/MDXRenderer"
import { HeadingProvider } from "@/components/MDXRenderer/Heading/context"
import SEO from "@/components/SEO"
import PostSidebar from "@/components/Sidebar/PostSidebar"
import { filtersItems, simplifiedQueryData } from "@/utils/helpers"
import { ClockCircleOutlined } from "@ant-design/icons"

import { useStyles } from "./_style"

/**
 * @description 文章页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const PostTemplate: React.FC<
  PageProps<allMdxNodesQuery<"allPost"> & MdxNodesQuery<"currentPost">>
> = ({ children, data }) => {
  const { allPost, currentPost } = data
  const { styles } = useStyles()

  const { timeToRead } = currentPost.fields
  const { frontmatter } = currentPost

  const headings = filtersItems(currentPost.tableOfContents.items)

  const posts = simplifiedQueryData(allPost.nodes).filter((i) => i.slug !== frontmatter.slug)
  const tags = frontmatter?.tags.map((t) => ({ name: t, path: `/tags/${t}` }))

  return (
    <HeadingProvider value={headings}>
      <div className={styles.post}>
        <div className="content">
          <Typography.Title level={2} className={styles.title}>
            {frontmatter?.title}
          </Typography.Title>

          <div className={styles.information}>
            <Space className="times" align="center">
              <Tooltip
                placement="bottom"
                title={`发布于 ${dayjs(frontmatter?.date).format("YYYY-MM-DD")}`}
              >
                <Space>
                  <Calendar />
                  {frontmatter?.lastUpdated}
                </Space>
              </Tooltip>

              <ClockCircleOutlined style={{ marginLeft: "1rem" }} />
              {timeToRead.text}
            </Space>

            {tags.map((i) => (
              <Tag key={i.path} bordered={false} onClick={() => navigate(i.path)}>
                #<span>{i.name}</span>
              </Tag>
            ))}
          </div>

          <MDXRenderer>{children}</MDXRenderer>

          <Comment />
        </div>

        <PostSidebar
          date={frontmatter?.date}
          icon={frontmatter?.icon}
          headings={headings}
          posts={posts}
        />
      </div>
    </HeadingProvider>
  )
}

export default PostTemplate

export const Head: HeadFC<allMdxNodesQuery<"allPost"> & MdxNodesQuery<"currentPost">> = (props) => {
  const { location, data } = props
  const { frontmatter } = data.currentPost

  return (
    <>
      <SEO
        title={frontmatter?.title}
        description={frontmatter.description}
        pathName={location.pathname}
      />
    </>
  )
}

export const recentQuery = graphql`
  query PostPage($slug: String, $published: [Boolean] = [true]) {
    allPost: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { ne: "page" }, published: { in: $published } } }
    ) {
      nodes {
        ...InformationFragment
      }
    }
    currentPost: mdx(frontmatter: { slug: { eq: $slug } }) {
      ...InformationFragment
      newFrontmatter: frontmatter {
        date(formatString: "YYYY-MM-DD")
      }
      tableOfContents(maxDepth: 5)
    }
  }
`

export const InformationFragmentQuery = graphql`
  fragment InformationFragment on Mdx {
    frontmatter {
      title
      description
      date(formatString: "MMMM DD, YYYY")
      lastUpdated(formatString: "MMMM DD, YYYY")
      icon
      slug
      template
      tags
      published
    }
    fields {
      timeToRead {
        minutes
        time
        words
        text
      }
      path
      slug
    }
  }
`
