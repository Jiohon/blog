import { generate } from "@ant-design/colors"

import config from "@/config"

type GenerateColorKeyTypes<T extends string> = {
  [K in `color${T}${
    | "Bg"
    | "BgHover"
    | "Border"
    | "BorderHover"
    | "Hover"
    | ""
    | "Active"
    | "TextHover"
    | "Text"
    | "TextActive"}`]: string
}

/**
 * @description 转换默认关系名称
 * @param key
 * @param colors
 * @returns
 */
export const defaultRelationship = <T extends string>(
  key: T,
  colors: string[]
): GenerateColorKeyTypes<T> => {
  const _key = key.charAt(0).toUpperCase() + key.slice(1)

  const _colors = {
    [`color${_key}Bg`]: colors[0],
    [`color${_key}BgHover`]: colors[1],
    [`color${_key}Border`]: colors[2],
    [`color${_key}BorderHover`]: colors[3],
    [`color${_key}Hover`]: colors[4],
    [`color${_key}`]: colors[5],
    [`color${_key}Active`]: colors[6],
    [`color${_key}TextHover`]: colors[4],
    [`color${_key}Text`]: colors[5],
    [`color${_key}TextActive`]: colors[6],
  } as GenerateColorKeyTypes<T>

  return _colors
}

export type GeneratePresetTypes<T extends string> = Omit<
  {
    [K in `${T}${"" | "-"}${"" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`]: string
  },
  `${T}-`
>
/**
 * @description 转换预设调色板关系名称
 * @param key
 * @param colors
 * @returns
 */
export const presetRelationship = <T extends string>(key: T, colors: string[]) => {
  const colorsObject = {} as GeneratePresetTypes<T>

  colors.forEach((color, i) => {
    colorsObject[`${key}-${i + 1}` as keyof GeneratePresetTypes<T>] = color
    colorsObject[`${key}${i + 1}` as keyof GeneratePresetTypes<T>] = color
  })

  colorsObject[key as unknown as keyof GeneratePresetTypes<T>] = colors[5]

  return colorsObject
}

/**
 * @description 生成预设调色板
 * @param baseColorName 色彩名称
 * @param baseColorHex 色彩十六进制
 * @param theme
 * @returns
 */
export const generatePresetPalette = <T extends string>(
  baseColorName: T,
  baseColorHex: string,
  theme: "default" | "dark"
) => {
  const colors = generate(baseColorHex, {
    theme: theme,
    backgroundColor: config.themes.light.backgroundColor,
  })

  const generateColors = presetRelationship(baseColorName, colors)

  return generateColors
}
