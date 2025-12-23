import type { PropsWithChildren } from "react"
import { createContext, useRef } from "react"

import { createStore } from "zustand"

import { useSiteMetadata } from "@/hooks/useSiteMetadata"
import type { SiteMetadata } from "@/hooks/useSiteMetadata"

import type { ZustandStore } from "./zustandTypes"

export interface SiteStore {
  siteMetadata: SiteMetadata

  // testing with no store actions
  // a pattern that "doesn't offer any downsides" according to the docs.
  //   increment: () => void;
}

export type StoreType = ZustandStore<SiteStore> | null

export const StoreContext = createContext<StoreType>(null)

const SiteStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<StoreType>()
  const siteMetadata = useSiteMetadata()

  if (!storeRef.current) {
    storeRef.current = createStore(() => ({
      siteMetadata,
    }))
  }
  return <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>
}

export default SiteStoreProvider
