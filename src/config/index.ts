import { themes } from "prism-react-renderer"

import GatsbyFooterSvg from "@/components/Icons/GatsbyFooter"
import GithubSvg from "@/components/Icons/Github"
import GithubFooterSvg from "@/components/Icons/GithubFooter"

import SiteConfig from "./type"

const siteConfig: SiteConfig = {
  comment: true,
  themes: {
    brandColor: "#6c4cff",
    light: {
      colorBgLayout: "#ffffff",
      codeHighlight: themes.oneLight,
    },
    dark: {
      colorBgLayout: "#0f0f11",
      codeHighlight: themes.oneDark,
    },
  },
  headers: {
    menu: [
      { url: "/about", label: "About", show: true },
      { url: "/archive", label: "Archive", show: true },
    ],
    social: [{ url: "https://github.com/jiohon", label: "GitHub", icon: GithubSvg, show: true }],
  },
  footers: {
    menu: [
      { url: "https://www.gatsbyjs.org/", label: "Gatsby", icon: GatsbyFooterSvg, show: true },
      { url: "https://github.com/jiohon", label: "GitHub", icon: GithubFooterSvg, show: true },
    ],
    friend: [],
    ICPRecord: "蜀ICP备2022009836号",
  },
}

export default siteConfig
