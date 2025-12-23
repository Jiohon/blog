import type { ThemeAppearance } from "antd-style"

export const matchBrowserPrefers = (mode: ThemeAppearance): MediaQueryList => {
  if (typeof window !== "undefined") {
    return window?.matchMedia(`(prefers-color-scheme: ${mode})`)
  }
  // 针对 ssr 做特处
  return { matches: false } as MediaQueryList
}
