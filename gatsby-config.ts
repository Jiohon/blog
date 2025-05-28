import * as dotenv from "dotenv"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

import packageJson from "./package.json"
import rehypeMetaAttributes from "./plugins/gatsby-rehype-meta-attributes"
import { SiteMetadataType } from "./src/hooks/useSiteMetadata"
import { getNotPublished } from "./src/utils/env"

import type { GatsbyConfig } from "gatsby"

dotenv.config({ path: [`.env`, `.env.${process.env.NODE_ENV}`], override: true })

type GatsbyConfigType = GatsbyConfig & {
  siteMetadata: SiteMetadataType["site"]["siteMetadata"]
}

const siteMetadata: SiteMetadataType["site"]["siteMetadata"] = {
  title: packageJson.title,
  author: packageJson.author,
  description: packageJson.description,
  siteUrl: packageJson.homepage,
  feedUrl: `${packageJson.homepage}/rss.xml`,
  logo: `${packageJson.homepage}/logo.png`,
  version: packageJson.version,
  repository: packageJson.repository.url,
}

const config: GatsbyConfigType = {
  jsxRuntime: "automatic",
  flags: {
    DEV_SSR: true,
  },
  graphqlTypegen: true,
  pathPrefix: "/",
  trailingSlash: "never",
  siteMetadata,
  plugins: [
    "gatsby-rehype-meta-attributes",
    "gatsby-plugin-version-update",
    {
      resolve: "gatsby-plugin-custom-routing",
      options: {
        nestedIndexToRoot: true,
        ignore: ["**/*.css", "**/*.ts", "!**/index.ts", "**/*.scss", "**/README.md"],
        customMappings: {},
        context: {
          published: getNotPublished(),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `./content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `./example/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `./src/assets/`,
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                author
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `{
                      allMarkdownRemark(
                        limit: 30
                        sort: {frontmatter: {date: DESC}}
                        filter: {frontmatter: {published: {eq: true}}}
                      ) {
                        nodes {
                          html
                          frontmatter {
                            title
                            slug
                            date
                            description
                          }
                          excerpt
                        }
                      }
                    }`,
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                const { frontmatter, html, excerpt } = node
                const { siteMetadata } = site

                return Object.assign({}, frontmatter, {
                  description: excerpt,
                  date: frontmatter.date,
                  url: `${siteMetadata.siteUrl}/${frontmatter.slug}`,
                  guid: `${siteMetadata.siteUrl}/${frontmatter.slug}`,
                  custom_elements: [{ "content:encoded": html }, { author: site.author }],
                })
              })
            },

            output: "/rss.xml",
            title: "Johon | RSS Feed",
          },
        ],
      },
    },

    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeMetaAttributes, rehypeKatex],
        },
        gatsbyRemarkPlugins: [],
      },
    },
  ],
}

export default config
