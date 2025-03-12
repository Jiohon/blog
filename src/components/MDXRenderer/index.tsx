import React from "react"

import { MDXProvider } from "@mdx-js/react"

import components from "./components"

export type MDXRendererProps = {
  children: React.ReactNode
}

const MDXRenderer: React.FC<React.PropsWithChildren<MDXRendererProps>> = ({ children }) => {
  return <MDXProvider components={components as any}>{children}</MDXProvider>
}

export default MDXRenderer
