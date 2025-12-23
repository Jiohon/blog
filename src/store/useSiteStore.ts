import type React from "react"
import { startTransition, useContext, useEffect } from "react"

import { useDebounceEffect } from "ahooks"
import { useStoreWithEqualityFn } from "zustand/traditional"

import type { SiteStore, StoreType } from "@/context/SiteStoreProvider"
import { StoreContext } from "@/context/SiteStoreProvider"
import type { ExtractState } from "@/context/SiteStoreProvider/zustandTypes"
import { isSSR } from "@/utils/func"

const SSRInit: Record<string, boolean> = {}

const useReact18xUpdater = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    startTransition(() => {
      effect()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
const useLegacyUpdater = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  useDebounceEffect(
    () => {
      effect()
    },
    deps,
    { wait: 32, maxWait: 96 }
  )
}

const useUpdater = typeof startTransition === "function" ? useReact18xUpdater : useLegacyUpdater

export function useStoreApi() {
  return useContext(StoreContext)
}

// 重载签名
export function useSyncState<T extends keyof SiteStore>(key: T, value: SiteStore[T]): void
export function useSyncState<T extends keyof SiteStore>(
  key: T,
  value: SiteStore[T],
  updateMethod: (key: T, value: SiteStore[T], storeApi: StoreType) => void
): void

// 实现签名
export function useSyncState<T extends keyof SiteStore>(
  key: T,
  value: SiteStore[T],
  updateMethod?: (key: T, value: SiteStore[T], storeApi: StoreType) => void
) {
  const storeApi = useStoreApi()
  const updater = updateMethod
    ? updateMethod
    : (key: T, value: SiteStore[T]) => storeApi?.setState({ [key]: value })

  // SSR 环境下只更新一次
  if (isSSR && !SSRInit[key]) {
    updater(key, value, storeApi)
    SSRInit[key] = true
  }

  useUpdater(() => {
    updater(key, value, storeApi)
  }, [value])
}

export function useSiteStore<U>(selector: (state: ExtractState<StoreType>) => U) {
  const store = useContext(StoreContext)
  if (!store) {
    throw "Missing SiteStoreProvider"
  }
  //@deprecated...
  //return useStore(store, selector);
  return useStoreWithEqualityFn(store, selector)
}
