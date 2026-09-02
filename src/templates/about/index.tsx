import React from "react"

import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"

import PrismSyntaxHighlight from "@/components/MDXRenderer"
import SEO from "@/components/SEO"
import MeSidebar from "@/components/Sidebar/MeSidebar"

import { useStyles } from "./_style"

/**
 * @description 个人介绍页面
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const AboutTemplate: React.FC<PageProps<MdxNodesQuery<"me">, MdxQuery>> = (props) => {
  const { data, children } = props
  const { styles } = useStyles()

  return (
    <div className={styles.about}>
      <div>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>ABOUT / PROFILE</span>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              {data.me.frontmatter.title}
              <span>.</span>
            </h1>
            <p className={styles.heroDescription}>{data.me.frontmatter.description}</p>
          </div>
          <div className={styles.heroMeta}>
            <span>Personal profile</span>
            <span>Get to know me</span>
          </div>
        </header>
        <PrismSyntaxHighlight>{children}</PrismSyntaxHighlight>
      </div>

      <MeSidebar />
    </div>
  )
}

export default AboutTemplate

export const Head: HeadFC<MdxQuery> = ({ location, data }) => {
  const { frontmatter } = data

  return (
    <>
      <SEO
        title={frontmatter?.title || "About me"}
        description={frontmatter?.description}
        pathName={location.pathname}
      />
    </>
  )
}

export const pageQuery = graphql`
  query MeBySlug($slug: String) {
    me: mdx(frontmatter: { slug: { eq: $slug } }) {
      ...InformationFragment
    }
  }
`
