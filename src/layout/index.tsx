import React from 'react'
import { BlogThemeProvider } from '@/context/BlogThemeContext'
import { StoreUpdater } from '@/components/StoreUpdater'
import { GlobalStyle } from '@/styles/global'

// import { BgParticles } from '../components/BgParticles'
import { Footer } from './footer/index'
import { Header } from './header/index'

import { useStyles } from './style'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { styles } = useStyles()

  return (
    <BlogThemeProvider>
      <GlobalStyle />
      <StoreUpdater />

      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        {/* <BgParticles /> */}
      </div>
    </BlogThemeProvider>
  )
}
