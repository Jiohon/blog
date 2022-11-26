import React from 'react'

import { FooterA, FooterContainer, FooterImg, FooterNav, FooterSection, FooterSpan } from './style'
import gatsby from '/src/assets/gatsby.png'
import github from '/src/assets/nav-github.png'

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
  return (
    <FooterContainer>
      <FooterSection>
        <FooterNav>
          <FooterSpan className="desktop-only">© 2022 {year} By Hush</FooterSpan>
          <FooterSpan id="busuanzi_container_site_pv" style={{ display: 'none' }}>
            总访问量<span id="busuanzi_value_site_pv"></span>次
          </FooterSpan>
          {links.map((link) => (
            <FooterA href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
              {link.label}
            </FooterA>
          ))}
        </FooterNav>
        <FooterNav>
          {madeWithLinks.map((link) => (
            <FooterA href={link.url} title={link.label} target="_blank" rel="noopener noreferrer" key={link.url}>
              <FooterSpan>{link.label}</FooterSpan>
              <FooterImg src={link.icon} alt={link.label} />
            </FooterA>
          ))}
        </FooterNav>

        <FooterNav>
          <FooterA href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            蜀ICP备2022009836号
          </FooterA>
        </FooterNav>
      </FooterSection>
    </FooterContainer>
  )
}
