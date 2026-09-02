import type { HeadFC, PageProps } from "gatsby"

import { Card, Space, Typography } from "antd"

import SEO from "@/components/SEO"
import { SpotlightCard } from "@/components/SpotlightCard"
import projectList from "@/data/projects"
import { ExportOutlined } from "@ant-design/icons"

import { useStyles } from "./_style"

const { Link } = Typography

interface ProjectProps {
  data: PageProps<allMdxNodesQuery<"project">>
}

const Project: React.FC<ProjectProps> = () => {
  const { styles } = useStyles()

  return (
    <Space className={styles.projects} direction="vertical" size={0}>
      <header className={styles.hero}>
        <span className={styles.eyebrow}>SELECTED WORK / 2026</span>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Projects<span>.</span>
          </h1>
          <p className={styles.heroDescription}>我做过的一些产品、工具与实验</p>
        </div>
        <div className={styles.heroMeta}>
          <span>{String(projectList.length).padStart(2, "0")} selected projects</span>
          <span>Explore freely</span>
        </div>
      </header>

      <div className={styles.wrapper}>
        {projectList.map((item, index) => {
          return (
            <SpotlightCard key={item.name}>
              <article className={styles.projectCard}>
                <Card bordered={false}>
                  <div className={styles.cardHeader}>
                    <span className={styles.projectIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <Space className={styles.projectContent} direction="vertical" size={12}>
                    <Link
                      className={styles.projectName}
                      href={item.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.name}
                    </Link>
                    <div className={styles.projectDescription}>{item.description}</div>
                  </Space>

                  <div className={styles.projectTags}>
                    {item.tags.map((tag) => (
                      <Link href={tag.url} key={tag.name} rel="noreferrer" target="_blank">
                        {tag.name}
                        <ExportOutlined />
                      </Link>
                    ))}
                  </div>
                </Card>
              </article>
            </SpotlightCard>
          )
        })}
      </div>
    </Space>
  )
}

export default Project

export const Head: HeadFC = (props) => {
  const { location } = props

  return (
    <>
      <SEO
        title="projects"
        description="Some projects that have been done"
        pathName={location.pathname}
      />
    </>
  )
}
