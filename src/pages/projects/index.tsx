import type { HeadFC, PageProps } from "gatsby"

import { Card, Space, Typography } from "antd"

import BriefHeader from "@/components/BriefHeader"
import SEO from "@/components/SEO"
import projectList from "@/data/projects"

import { useStyles } from "./_style"

const { Link } = Typography

interface ProjectProps {
  data: PageProps<allMdxNodesQuery<"project">>
}

const Project: React.FC<ProjectProps> = () => {
  const { styles } = useStyles()

  return (
    <Space className={styles.projects} direction="vertical" size={0}>
      <BriefHeader title="Projects" description="一些做过的项目。" />

      <div className={styles.wrapper}>
        {projectList.map((item) => {
          return (
            <Card
              className={styles.projectCard}
              key={item.name}
              actions={item.tags.map((tag) => (
                <Link href={tag.url} key={tag.name} target="_blank">
                  {tag.name}
                </Link>
              ))}
            >
              <Space direction="vertical">
                <Link className={styles.projectName} href={item.url} target="_blank">
                  {item.name}
                </Link>
                <div className={styles.projectDescription}>{item.description}</div>
              </Space>
            </Card>
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
