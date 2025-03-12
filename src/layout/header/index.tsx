import { Space } from "antd"
import { Link } from "gatsby"

import ThemeSwitch from "@/components/ThemeSwitch"
import config from "@/config"

import { useStyles } from "./style"

export const Header = () => {
  const { styles, cx } = useStyles()

  const menu = config.headers.menu.filter((item) => item.show)
  const social = config.headers.social.filter((item) => item.show)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Space size="large">
            <Link to="/" className={cx(styles.link, "logo")}>
              J
            </Link>

            {menu.map((item) => (
              <Link className={styles.link} to={item.url} key={item.label}>
                {item.label}
              </Link>
            ))}

            {social.map((item) => (
              <a
                className={styles.link}
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <item.icon />
              </a>
            ))}
          </Space>

          <ThemeSwitch />
        </div>
      </div>
    </>
  )
}
