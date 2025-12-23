import type { GeneratePresetTypes } from "@/customize-theme/theme/generate"
import { FastColor } from "@ant-design/fast-color"

import type { GetCustomToken } from "antd-style"

declare module "antd-style" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends SiteToken, GeneratePresetTypes<"gray"> {}
}

/**
 * @title 站点主题 Token
 * @description 站点的一些基础配置信息
 */
export interface SiteToken {
  /**
   * @title 导航栏高度
   */
  headerHeight: number
  /**
   * @title 导航栏高度 - 移动端
   */
  headerHeightMobile: number
  /**
   * @title 页面内容最大宽度
   * @description 文本内容的最大宽度 1100
   */
  contentMaxWidth: number
  /**
   * @title 底部高度
   */
  footerHeight: number
  /**
   * @title 底部高度移动端
   */
  footerHeightMobile: number
  /**
   * @title Logo渐变
   */
  gradientLogo: string

  /**
   * @title 代码块高亮背景色
   */
  colorBgCodeHighlight: string

  /**
   * @title 默认填充色
   */
  colorFillDefaultBg: string
  /**
   * @title 第四级阴影样式
   */
  boxShadowFourth: string
  /**
   * @title 第四级边框色
   */
  colorBorderFourth: string
}

export const createCustomToken: GetCustomToken<SiteToken> = ({ isDarkMode, token }) => {
  return {
    borderRadius: 8,

    headerHeight: 64,
    headerHeightMobile: 50,

    contentMaxWidth: 1100,

    footerHeight: 160,
    footerHeightMobile: 130,

    gradientLogo: `linear-gradient(45deg,#90d5ff 20%,${token.colorPrimary})`,

    fontFamilyCode: `SF Mono Medium,${token.fontFamilyCode}`,

    colorHighlight: isDarkMode ? "#16182c" : "#ebf1ff",

    colorBgCodeHighlight: isDarkMode ? "#1d1d1d" : "#fafafa",

    colorFillDefaultBg: new FastColor(token.colorFillQuaternary)
      .onBackground(token.colorBgContainer)
      .toHexString(),

    boxShadowFourth: isDarkMode
      ? ""
      : "0px 0.8px 2px rgba(0, 0, 0, 0.028),0px 2.7px 6.7px rgba(0, 0, 0, 0.03),0px 3px 15px rgba(0, 0, 0, 0.052)",

    colorBorderFourth: isDarkMode ? "#282828" : "#f5f5f5",
  }
}
