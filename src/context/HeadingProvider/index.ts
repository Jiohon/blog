import { createContext, useContext } from "react"

import { HeadingItem } from "@/utils/helpers"

export const HeadingContext = createContext<HeadingItem[]>([])

export const HeadingProvider = HeadingContext.Provider

export const useHeading = () => {
  return useContext(HeadingContext)
}
