import type { GatsbySSR } from "gatsby"

import { extractStaticStyle } from "antd-style"

import Layout from "./src/layout"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onPreRenderHTML: GatsbySSR["onPreRenderHTML"] = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()

  const antdCache = global.__ANTD_CACHE__

  // 提取 antd-style 样式
  const styles = extractStaticStyle("", { antdCache })

  replaceHeadComponents([
    ...headComponents,
    ...styles.map((item) => <style key={item.key} {...item.style.props} />),
  ])
}
