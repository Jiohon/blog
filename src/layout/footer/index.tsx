import React from 'react'

import gatsby from '@/assets/image/gatsby.png'
import github from '@/assets/image/github.png'
import { useStyles } from './style'

type Links = {
  url: string
  label: string
  icon?: string
}

const links: Links[] = []
const madeWithLinks: Links[] = [
  { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/hushed3', label: 'GitHub', icon: github },
]

export const Footer = () => {
  const year = new Date().getFullYear() === 2022 ? '' : `- ${new Date().getFullYear()}`

  const { styles } = useStyles()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <span className={`${styles.item} desktop-only`}>© 2022 {year} By Hush</span>
        {links.map((link) => (
          <a className={styles.href} href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
            {link.label}
          </a>
        ))}
      </div>

      <div className={styles.footerContainer}>
        {madeWithLinks.map((link) => (
          <a
            className={styles.href}
            href={link.url}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
            key={link.url}
          >
            <span className={styles.item}>{link.label}</span>
            <img className={styles.image} src={link.icon} alt={link.label} />
          </a>
        ))}
      </div>

      <div className={styles.footerContainer}>
        <a className={styles.href} href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
          蜀ICP备2022009836号
        </a>
      </div>
    </footer>
  )
}
