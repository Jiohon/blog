import React from "react"

import Layout from "./src/layout"

import type { GatsbyBrowser } from "gatsby"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
  const error = console.error
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }
  return <Layout {...props}>{element}</Layout>
}
