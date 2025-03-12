import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

import packageJson from "./package.json"
import rehypeMetaAsAttributes from "./plugins/rehype-meta-as-attributes"
import { SiteMetadataType } from "./src/hooks/useSiteMetadata"

import type { GatsbyConfig } from "gatsby"

// const __dirname = dirname(fileURLToPath(import.meta.url))

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
  siteMetadata,
  plugins: [
    // @see: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
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

    // ===================================================================================
    // Meta
    // ===================================================================================
    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/
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

    // ===================================================================================
    // Images and static
    // ===================================================================================

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, "png"],
          placeholder: `none`,
          backgroundColor: `transparent`,
        },
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/
    "gatsby-transformer-sharp",

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    "gatsby-plugin-image",

    // ===================================================================================
    // Markdown
    // ===================================================================================
    "gatsby-transformer-remark",
    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeMetaAsAttributes, rehypeKatex],
        },
        gatsbyRemarkPlugins: [
          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-images/
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              backgroundColor: "transparent",
            },
          },
        ],
      },
    },
  ],
}

export default config
