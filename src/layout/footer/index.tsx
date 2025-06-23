import { Divider, Space, Typography } from "antd"

import Splitter from "@/components/Icons/Splitter"
import config from "@/config"
import { useSiteStore } from "@/store"

import { useStyles } from "./style"

export const Footer = () => {
  const { styles } = useStyles()
  const site = useSiteStore((state) => state.siteMetadata)

  const menu = config.footers.menu.filter((item) => item.show)
  const friend = config.footers.friend.filter((item) => item.show)
  const ICPRecord = config.footers.ICPRecord

  return (
    <>
      <Splitter />
      <footer className={styles.footer}>
        <Typography.Text className={styles.powered}>
          ʕʘ̅͜ʘ̅ʔ Powered By <span className="author">{site.author}</span>
        </Typography.Text>

        <Space size="middle" className={styles.wrapper}>
          {menu.map((link) => (
            <Typography.Link
              className={styles.href}
              key={link.url}
              href={link.url}
              title={link.label}
              target="_blank"
            >
              <span>{link.label}</span>
              <link.icon />
            </Typography.Link>
          ))}

          {friend.length > 0 && <Divider type="vertical" />}

          {friend.map((link) => (
            <Typography.Link
              className={styles.href}
              key={link.url}
              href={link.url}
              title={link.label}
              target="_blank"
            >
              <span>{link.label}</span>
              <link.icon />
            </Typography.Link>
          ))}
        </Space>

        {ICPRecord && (
          <Typography.Link
            className={styles.href}
            href="https://beian.miit.gov.cn/"
            target="_blank"
          >
            {ICPRecord}
          </Typography.Link>
        )}
      </footer>
    </>
  )
}
