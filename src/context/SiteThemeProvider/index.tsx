import React, { memo, useCallback } from "react"

import { extractStaticStyle, StyleProvider, ThemeProvider } from "antd-style"

import { createCustomStylish, createCustomToken, getAntdTheme } from "@/customize-theme"
import { GlobalScopeStyle } from "@/customize-theme/globalScopeStyle"
import { useThemeMode } from "@/hooks/useThemeMode"

global["__ANTD_CACHE__"] = extractStaticStyle.cache

const SiteThemeProvider = memo<{ children: React.ReactNode }>(({ children }) => {
  const { themeMode, appearance } = useThemeMode()

  return (
    <>
      <ThemeProvider
        prefixCls={"site"}
        themeMode={themeMode}
        theme={getAntdTheme}
        customToken={createCustomToken}
        customStylish={createCustomStylish}
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
