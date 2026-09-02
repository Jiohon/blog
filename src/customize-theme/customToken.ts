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
   * @title 页面背景
   */
  pageBackground: string

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

    pageBackground: `radial-gradient(600px 400px at 15% -5%, color-mix(in srgb, ${token.colorPrimary} 14%, transparent), transparent 65%),
    radial-gradient(700px 500px at 90% 10%, color-mix(in srgb, ${token.colorSuccess} 10%, transparent), transparent 65%),
    radial-gradient(360px 260px at 42% 24%, color-mix(in srgb, ${token.colorPrimary} 5%, transparent), transparent 72%),
    radial-gradient(520px 380px at 6% 55%, color-mix(in srgb, ${token.colorInfo} 7%, transparent), transparent 70%),
    radial-gradient(400px 300px at 70% 42%, color-mix(in srgb, ${token.colorSuccess} 4%, transparent), transparent 74%),
    radial-gradient(560px 400px at 96% 60%, color-mix(in srgb, ${token.colorWarning} 6%, transparent), transparent 70%),
    radial-gradient(300px 240px at 28% 78%, color-mix(in srgb, ${token.colorInfo} 4%, transparent), transparent 75%),
    radial-gradient(380px 280px at 76% 88%, color-mix(in srgb, ${token.colorWarning} 3%, transparent), transparent 76%),
    radial-gradient(500px 360px at 8% 100%, color-mix(in srgb, ${token.colorError} 6%, transparent), transparent 70%),
    radial-gradient(340px 260px at 38% 108%, color-mix(in srgb, ${token.colorError} 4%, transparent), transparent 76%),
    radial-gradient(680px 440px at 50% 108%, color-mix(in srgb, ${token.colorError} 6%, transparent), transparent 70%),
    ${token.colorBgLayout}`,

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
