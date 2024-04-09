import { Divider, Space, Typography } from 'antd'
import config from '@/config'
import { useStyles } from './style'

export const Footer = () => {
  const { styles } = useStyles()

  const footerMenu = config.footers.menu
  const footerFriend = config.footers.friend
  const ICPRecord = config.footers.ICPRecord

  return (
    <footer className={styles.footer}>
      <Typography.Text className={styles.text}>Power By {config.site.author}</Typography.Text>

      <Space size="middle" className={styles.footerContainer}>
        {footerMenu.map((link) => (
          <Typography.Link className={styles.href} key={link.url} href={link.url} title={link.label} target="_blank">
            <span>{link.label}</span>
            <img className="image" src={link.icon} alt={link.label} />
          </Typography.Link>
        ))}

        {footerFriend.length > 0 && <Divider type="vertical" />}

        {footerFriend.map((link) => (
          <Typography.Link className={styles.href} key={link.url} href={link.url} title={link.label} target="_blank">
            <span>{link.label}</span>
            <img className="image" src={link.icon} alt={link.label} />
          </Typography.Link>
        ))}
      </Space>

      {ICPRecord && (
        <Typography.Link className={styles.href} href="https://beian.miit.gov.cn/" target="_blank">
          {ICPRecord}
        </Typography.Link>
      )}
    </footer>
  )
}
