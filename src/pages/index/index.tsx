import { Card, Space } from "antd"
import { graphql, Link } from "gatsby"

import BriefHeader from "@/components/BriefHeader"
import Heading from "@/components/Heading"
import SEO from "@/components/SEO"
import SVGIcon from "@/components/SvgIcon"
import { useSiteStore } from "@/store"
import { simplifiedQueryData } from "@/utils/helpers"

import { useStyles } from "./_style"

import type { HeadFC, PageProps } from "gatsby"
/**
 * @description 首页
 * @date 23/10/2022
 * @export
 * @return {*}
 */
const Home: React.FC<PageProps<allMdxNodesQuery<"latest" | "Highlights"> & MdxNodesQuery>> = ({
  data,
}) => {
  const { styles } = useStyles()

  const site = useSiteStore((state) => state.siteMetadata)

  const latestList = simplifiedQueryData(data.latest.nodes)
  const highlightsList = simplifiedQueryData(data.Highlights.nodes)

  return (
    <Space className={styles.home} direction="vertical" size={[0, 40]}>
      <BriefHeader greeting={<>Hey, I&rsquo;m &nbsp;&nbsp;{site.author}</>}>
        <p className={styles.briefDescription}>
          I hope you live a life you&rsquo;re proud of. If you find that you&rsquo;re not, I hope
          you have the courage to start over.
        </p>
        <p className={styles.briefDescription}>
          「 我希望你过着自己引以为傲的生活。如果你发现事实并非如此，我希望你有勇气重新开始 」
        </p>
        <p className={styles.briefDescription}>Have a good day. </p>
      </BriefHeader>

      <Heading title="最近内容" slug="/archive" />
      <div className={styles.wrapper}>
        {latestList.map((item) => {
          return (
            <Card className={styles.latestCard} key={item.slug}>
              <time className={styles.time}>{item.date}</time>
              <Link className={styles.titleLink} to={item.path}>
                {item.title}
              </Link>
              <div className={styles.tagLinks}>
                {item.tags &&
                  item.tags
                    .filter((cat) => cat !== "Highlight")
                    .map((cat) => {
                      return (
                        <Link to={`/tags/${cat}`} key={`cat-${cat}`}>
                          {cat}
                        </Link>
                      )
                    })}
              </div>
            </Card>
          )
        })}
      </div>

      {/* 查找目录下带有 Highlight 的markdown文件 */}
      {highlightsList.length > 0 && (
        <>
          <Heading title="热门内容" />
          <div className={styles.wrapper}>
            {highlightsList.map((item) => {
              return (
                <Card className={styles.highlightCard} key={`Highlight-${item.slug}`}>
                  <SVGIcon id={item.icon} width="5em" height="5em"></SVGIcon>
                  <div className="content">
                    <time className={styles.time}>{item.date}</time>
                    <Link className={styles.titleLink} to={item.slug}>
                      {item.title}
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>
        </>
      )}
    </Space>
  )
}

export default Home

export const Head: HeadFC = (props) => {
  const { location } = props

  return (
    <>
      <SEO pathName={location.pathname}></SEO>
    </>
  )
}

export const pageQuery = graphql`
  query HomePage($published: [Boolean]) {
    latest: allMdx(
      limit: 6
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { ne: "page" }, published: { in: $published } } }
    ) {
      nodes {
        ...InformationFragment
      }
    }
    Highlights: allMdx(
      limit: 6
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { eq: "Highlight" }, published: { in: $published } } }
    ) {
      nodes {
        ...InformationFragment
      }
    }
  }
`
