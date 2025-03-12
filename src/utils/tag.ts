/**
 * @description 提取href值
 * @date 16/11/2022
 * @param {string} str
 * @return {*}  string
 */
export const extractHref = (str: string): string => {
  const value = /(?<=<a.*href=").*(?=")/.exec(str)
  return value?.length ? value[0] : ""
}

/**
 * @description 提取标签内的值
 * @date 16/11/2022
 * @param {string} str
 * @return {*}  string
 */
export const extractValue = (str: string): string => {
  const value = /(?<=">).*(?=<\/a)/.exec(str)
  return value?.length ? value[0] : ""
}

/**
 * @description 提取标签的id
 * @date 16/11/2022
 * @param {string} str
 * @return {*}  string
 */
export const extractID = (str: string): string => {
  const value = str.match(/(?<=<h4.*id=").*(?="\sstyle)/)
  return value?.length ? value[0].replace(/-/g, " ") : ""
}

/**
 * @description 获取path
 */
export const extractPathname = (path: string): string => {
  return path.split("/")[2]
}

type TagTypes = React.ElementType
/**
 * @description 从字符串中获取完整的标签
 * @param {string} str
 * @param {TagTypes} tag 'div'
 * @example extractTag('<p>Example</p><div>Test</div>','p')
 * @returns string
 */
export const extractTag = (str: string, tag: TagTypes = "div") => {
  const tagRegExp = new RegExp(`<${tag}.*?${tag}>`)
  const tagRegExpArr = tagRegExp.exec(str)

  return tagRegExpArr?.[0]
}
