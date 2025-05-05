import React from "react"

import Layout from "./src/layout"

import type { GatsbyBrowser } from "gatsby"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
