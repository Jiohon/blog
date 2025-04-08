import { Alert, Tag } from "antd"

import { toCodeParams, ToPreParams } from "@/components/MDXRenderer/Pre/util"

import A from "./A"
import Blockquote from "./Blockquote"
import CodeHighlight from "./Code"
import Headings from "./Heading"
import Lists from "./Lists"
import PreHighlight from "./Pre"
import Table from "./Table"

const components = {
  code: (props) => {
    const codeProps = toCodeParams(props)

    return <CodeHighlight {...codeProps} />
  },
  pre: (props) => {
    const preProps = ToPreParams(props)

    return <PreHighlight {...preProps} />
  },
  Alert: (props) => {
    const { children, message } = props

    return <Alert {...props} message={children || message} style={{ marginBlockStart: "1.2rem" }} />
  },
  Tag: (props) => {
    return (
      <Tag {...props} bordered={false} style={{ fontWeight: props.bold ? "bold" : "inherit" }} />
    )
  },
  p: (props) => {
    return <p {...props}></p>
  },
  a: A,
  blockquote: Blockquote,
  table: Table,
  ...Headings,
  ...Lists,
}

export default components
