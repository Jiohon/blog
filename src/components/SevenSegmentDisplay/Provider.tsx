import React, { createContext, PropsWithChildren } from "react"

export interface SevenSegmentDisplayContext {
  digitSize: number
  segmentThickness: number
  segmentSpacing: number
  segmentActiveColor: string
  segmentInactiveColor: string
  glow: boolean
}

export type SevenSegmentDisplayProviderProps = SevenSegmentDisplayContext

export const SevenSegmentDisplayContext = createContext({} as SevenSegmentDisplayContext)

const SevenSegmentDisplayProvider: React.FC<
  PropsWithChildren<SevenSegmentDisplayProviderProps>
> = ({ children, ...rest }) => {
  return (
    <SevenSegmentDisplayContext.Provider value={rest}>
      {children}
    </SevenSegmentDisplayContext.Provider>
  )
}

export default SevenSegmentDisplayProvider
