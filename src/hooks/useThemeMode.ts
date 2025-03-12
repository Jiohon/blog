import { useCallback, useMemo } from "react"

import { useThemeMode as useAntdThemeMode } from "antd-style"

import { useThemeStore } from "@/store/useThemeStore"
import { isSSR } from "@/utils/func"
import { safeStartTransition } from "@/utils/safeStartTransition"

import type { ThemeContextState, ThemeMode } from "antd-style"

const THEME = "(prefers-color-scheme: dark)"

/**
 * @description 获取系统当前外观模式
 * @date 30/09/2022
 */
const osTheme = () => (!isSSR && window?.matchMedia(THEME).matches ? "dark" : "light")

/**
 * @description 主题外观模式。
 * @date 23/10/2022
 * @export
 * @return {*} ThemeContextState
 */
export const useThemeMode = (): ThemeContextState => {
  const { storeTheme, setStoreTheme } = useThemeStore()
  const theme = useAntdThemeMode()

  const appearance = useMemo(() => {
    if (storeTheme === "auto") {
      return osTheme()
    } else {
      return storeTheme
    }
  }, [storeTheme])

  const setThemeMode = useCallback(
    (mode: ThemeMode) => {
      safeStartTransition(() => {
        setStoreTheme(mode)
        theme.setThemeMode(mode)
        theme.setAppearance(appearance)
      })
    },
    [theme, appearance, setStoreTheme]
  )

  return { ...theme, themeMode: storeTheme, setThemeMode, appearance }
}
