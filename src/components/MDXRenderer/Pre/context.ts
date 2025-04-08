import { createContext } from "react"

import type { PreNodeProps } from "./util"
import type { SandboxEnvironment } from "@codesandbox/sandpack-react"

export interface PreContextProps extends PreNodeProps {
  codeString: string
  template?: string
  environment?: SandboxEnvironment
  highlightRef?: React.RefObject<HTMLPreElement>
}

const PreContext = createContext<PreContextProps>({} as PreContextProps)

export default PreContext
