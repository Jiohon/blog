import { darkTheme, lightTheme } from "./theme"

import type { GetAntdTheme } from "antd-style"

export const getAntdTheme: GetAntdTheme = (appearance) => {
  const theme = appearance === "dark" ? darkTheme : lightTheme
  return theme
}
