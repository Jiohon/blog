import React, { memo, useCallback } from "react"

import { extractStaticStyle, StyleProvider, ThemeProvider } from "antd-style"

import { createCustomToken, getAntdTheme, getCustomStylish } from "@/customize-theme"
import { GlobalScopeStyle } from "@/customize-theme/globalScopeStyle"
import { useThemeMode } from "@/hooks/useThemeMode"

import type { CustomTokenParams } from "antd-style"

global["__ANTD_CACHE__"] = extractStaticStyle.cache

const SiteThemeProvider = memo<{ children: React.ReactNode }>(({ children }) => {
  const { themeMode, appearance } = useThemeMode()

  const getCustomToken = useCallback((params: CustomTokenParams) => {
    const base = createCustomToken(params)

    return base
  }, [])

  return (
    <>
      <ThemeProvider
        prefixCls={"site"}
        themeMode={themeMode}
        appearance={appearance}
        theme={getAntdTheme}
        customToken={getCustomToken}
        customStylish={getCustomStylish}
      >
        <StyleProvider prefix={"site"} cache={extractStaticStyle.cache}>
          <GlobalScopeStyle />
          {children}
        </StyleProvider>
      </ThemeProvider>
    </>
  )
})

export default SiteThemeProvider
