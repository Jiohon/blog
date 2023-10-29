import { Link } from 'gatsby'
import React from 'react'
import ThemeSwitch from '@/components/ThemeSwitch'
import { useStyles } from './style'
import { headerMenuList, headerSocialList } from '@/config'

export const Header = () => {
  const { styles } = useStyles()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.navigations}>
            <Link to="/" className={styles.navigationLink}>
              <span className="logo">𝓙</span>
            </Link>
            {headerMenuList.map(
              (item) =>
                item.show && (
                  <Link className={styles.navigationLink} to={item.url} key={item.label}>
                    <span className="icon">
                      <item.icon />
                    </span>
                    <span className="label">{item.label}</span>
                  </Link>
                )
            )}

            {headerSocialList.map((item) => (
              <a className={styles.navigationLink} key={item.label} href={item.url} target="_blank" rel="noreferrer">
                <item.icon />
              </a>
            ))}
          </div>

          <ThemeSwitch />
        </div>
      </header>
    </>
  )
}
