import { ThemeConfig } from "antd"

import config from "@/config"

import { components } from "./components"
import { generatePresetPalette } from "./generate"

const grayColors = generatePresetPalette("gray", "#bfbfbf", "default")

export const lightTheme: ThemeConfig = {
  components,
  token: {
    colorPrimary: config.themes.brandColor,

    ...grayColors,

    colorBgLayout: config.themes.light.colorBgLayout,

    boxShadowTertiary:
      "0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 7px -1px rgba(0, 0, 0, 0.02), 0 2px 5px 0 rgba(0, 0, 0, 0.02)",
  },
}
