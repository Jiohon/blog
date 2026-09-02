import { useCallback, useEffect, useState } from "react"

import { useThemeMode as useAntdThemeMode } from "antd-style"

import { useThemeStore } from "@/store/useThemeStore"
import { safeStartTransition } from "@/utils/safeStartTransition"

import type { ThemeContextState, ThemeMode } from "antd-style"

/**
 * @description 主题外观模式。
 * @date 23/10/2022
 * @export
 * @return {*} ThemeContextState
 */
export const useThemeMode = (): ThemeContextState => {
  const { storeTheme, setStoreTheme } = useThemeStore()

  const themes = useAntdThemeMode()
  const [isThemeHydrated, setIsThemeHydrated] = useState(false)

  useEffect(() => {
    const hydrateTheme = async () => {
      if (!useThemeStore.persist.hasHydrated()) {
        await useThemeStore.persist.rehydrate()
      }

      setIsThemeHydrated(true)
    }

    void hydrateTheme()
  }, [])

  const setThemeMode = useCallback(
    (mode: ThemeMode) =>
      safeStartTransition(() => {
        setStoreTheme(mode)
      }),
    [setStoreTheme]
  )

  return { ...themes, themeMode: isThemeHydrated ? storeTheme : "light", setThemeMode }
}
