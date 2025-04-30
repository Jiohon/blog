import { useCallback, useMemo } from "react"

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

  const appearance = useMemo(() => {
    if (storeTheme === "auto") {
      return themes.browserPrefers
    } else {
      return storeTheme
    }
  }, [themes, storeTheme])

  const setThemeMode = useCallback(
    (mode: ThemeMode) => {
      safeStartTransition(() => {
        setStoreTheme(mode)
        themes.setAppearance(mode)
      })
    },
    [setStoreTheme, themes]
  )

  return { ...themes, appearance, themeMode: storeTheme, setThemeMode }
}
