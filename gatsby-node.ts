import path, { dirname } from "path"
import { fileURLToPath } from "url"

import * as dotenv from "dotenv"
import { createFilePath } from "gatsby-source-filesystem"
import NodePolyfillPlugin from "node-polyfill-webpack-plugin"
import readingTime from "reading-time"

import type { GatsbyNode } from "gatsby"

dotenv.config({ path: [`.env`, `.env.${process.env.NODE_ENV}`], override: true })

const __dirname = dirname(fileURLToPath(import.meta.url))

const GATSBY_PUBLISHED = JSON.parse(process.env.GATSBY_PUBLISHED)

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
      author: String!
      description: String!
      siteUrl: String!
      feedUrl: String!
      logo: String!
      version: String!
      repository: String!
    }
  `)
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
  actions.setWebpackConfig({
    ignoreWarnings: [/defaultProps will be removed/],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@@": path.resolve(__dirname, "src/assets"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
    plugins: [
      new NodePolyfillPlugin({ includeAliases: ["path", "url", "stream", "buffer", "events"] }),
    ],
  })
}

const postPage = path.resolve("./src/templates/post.tsx")
const aboutPage = path.resolve("./src/templates/about.tsx")
const tagPage = path.resolve("./src/templates/tag.tsx")

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  try {
    const { createPage, createRedirect } = actions

    createRedirect({ fromPath: "/rss", toPath: "/rss.xml", statusCode: 200 })

    const result = await graphql<allMdxNodesQuery<"posts">>(`
      query PagesData {
        posts: allMdx(sort: { frontmatter: { date: DESC } }) {
          nodes {
            body
            frontmatter {
              title
              description
              date(formatString: "YYYY-MM-DD")
              lastUpdated(formatString: "YYYY-MM-DD")
              icon
              slug
              template
              tags
              published
            }
            tableOfContents(maxDepth: 4)
            internal {
              contentFilePath
            }
          }
        }
      }
    `)

    if (result.errors || !result.data) {
      reporter.panicOnBuild("Error while running GraphQL query.", result.errors)
      return
    }

    const nodes = result?.data.posts.nodes
    const posts = nodes.filter((node) => node.frontmatter.template !== "page")
    const pages = nodes.filter((node) => node.frontmatter.template === "page")
    const tagSet = new Set()

    // =====================================================================================
    // posts
    // =====================================================================================
    posts.forEach((post, i) => {
      const previous = i === posts.length - 1 ? null : posts[i + 1]
      const next = i === 0 ? null : posts[i - 1]

      if (post.frontmatter.tags) {
        post.frontmatter.tags.forEach((tag) => {
          tagSet.add(tag)
        })
      }

      createPage({
        path: post.frontmatter.slug,
        component: `${postPage}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          slug: post.frontmatter.slug,
          previous,
          next,
          published: GATSBY_PUBLISHED,
        },
      })
    })

    // =====================================================================================
    // aboutPage
    // =====================================================================================

    pages.forEach((page) => {
      createPage({
        path: page.frontmatter.slug,
        component: `${aboutPage}?__contentFilePath=${page.internal.contentFilePath}`,
        context: {
          slug: page.frontmatter.slug,
        },
      })
    })

    // =====================================================================================
    // Tags
    // =====================================================================================

    const tagList = Array.from(tagSet)
    tagList.forEach((tag) => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagPage,
        context: {
          tag,
          published: GATSBY_PUBLISHED,
        },
      })
    })
  } catch (error) {
    console.error(error)
  }
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // =====================================================================================
  // Slugs
  // =====================================================================================
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value: slug,
    })

    createNodeField({
      node,
      name: "timeToRead",
      value: readingTime(node.body as string),
    })
  }
}
