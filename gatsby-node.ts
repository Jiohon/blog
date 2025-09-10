import path, { dirname } from "path"
import { fileURLToPath } from "url"

import dotenv from "dotenv"
import { createFilePath } from "gatsby-source-filesystem"
import NodePolyfillPlugin from "node-polyfill-webpack-plugin"
import readingTime from "reading-time"

import { getParseEnv } from "./env.config"
import { getPostTags, parseFilePath } from "./src/utils/helpers"

import type { GatsbyNode } from "gatsby"

const __dirname = dirname(fileURLToPath(import.meta.url))

dotenv.config({
  path: [".env", `.env.${process.env.NODE_ENV}`],
  override: true,
})

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
        "env.config": path.resolve(__dirname, "env.config.ts"),
        "@/assets": path.resolve(__dirname, "src/assets"),
        "@/static": path.resolve(__dirname, "static"),
      },
      // fallback: {
      //   fs: false,
      //   child_process: false,
      //   module: false,
      // },
    },
    plugins: [
      new NodePolyfillPlugin({
        includeAliases: [
          "path",
          "url",
          "stream",
          "buffer",
          "events",
          "os",
          "crypto",
          "vm",
          // "util",
          // "assert",
          // "http",
          // "https",
        ],
      }),
    ],
  })
}

export const onCreatePage: GatsbyNode["onCreatePage"] = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // 确保所有页面都有 published 上下文变量
  if (!Object.prototype.hasOwnProperty.call(page?.context, "published")) {
    deletePage(page)
    // @ts-expect-error: Gatsby页面上下文类型不完整
    page.context.published = getParseEnv(process.env.GATSBY_NOT_PUBLISHED) ? [true, false] : [true]
    createPage(page)
  }
}

const postPage = path.resolve("./src/templates/post/index.tsx")
const aboutPage = path.resolve("./src/templates/about/index.tsx")
const tagPage = path.resolve("./src/templates/tag/index.tsx")

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  try {
    const { createPage, createRedirect } = actions

    const published = getParseEnv(process.env.GATSBY_NOT_PUBLISHED) ? [true, false] : [true]

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
    const tags = getPostTags(nodes)

    // =====================================================================================
    // posts
    // =====================================================================================
    posts.forEach((post, i) => {
      const previous = i === posts.length - 1 ? null : posts[i + 1]
      const next = i === 0 ? null : posts[i - 1]

      const path = parseFilePath(post)

      createPage({
        path,
        component: `${postPage}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          slug: post.frontmatter.slug,
          previous,
          next,
          published,
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

    tags.forEach((tag) => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagPage,
        context: {
          tag,
          published,
        },
      })
    })
  } catch (error) {
    reporter.warn(`createPages: ${error}`)
  }
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // =====================================================================================
  // Slugs
  // =====================================================================================
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const path = parseFilePath(node as any)

    createNodeField({
      name: "path",
      value: path,
      node,
    })

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
