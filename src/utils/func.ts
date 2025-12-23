/**
 * @description 判断是否为SSR模式
 * @date 30/09/2022
 * @return {*}  boolean
 */
export const isSSR = (function () {
  try {
    return !window?.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
  } catch (e) {
    return true
  }
})()

/**
 * @description 生成随机字符串
 * @date 15/10/2023
 * @return {*}  string
 */
export const randomString = () => Math.random().toString(36).slice(2)

/**
 * @description 生成随机颜色
 * @date 15/10/2023
 * @return {*}  {string}
 */
export const randomColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`

/**
 * @description 解析url参数
 * @date 15/10/2023
 * @return {*}  object
 */
export const parseQuery = (url: string) => {
  const q = {}
  url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v))
  return q
}

/**
 * @description 复制内容到剪贴板
 * @date 09/08/2024
 * @param {string} text
 */
export function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    copyToClipboard = (text) => navigator.clipboard.writeText(text)
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    copyToClipboard = (text) => {
      const textArea = document.createElement("textarea")
      textArea.value = text

      // Avoid scrolling to bottom
      textArea.style.top = "0"
      textArea.style.left = "0"
      textArea.style.position = "fixed"

      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        const successful = document.execCommand("copy")
        successful ? "Copied to clipboard successfully!" : "Could not copy text"
      } catch (err) {
        console.error("Fallback: Could not copy text: ", err)
      }

      document.body.removeChild(textArea)
    }
  }
  copyToClipboard(text)
}

/**
 * @description 获取字符串行数
 * @date 09/04/2025
 * @param {string} str
 * @return {*}  {number}
 */
export const getCountLine = (str: string) => str.split("\n").length

/**
 * @description 从数组对象中查找匹配指定键值对的项
 * @date 10/05/2025
 * @param {Array<Record<string, unknown>>} array 要搜索的数组
 * @param {Record<string, unknown>} criteria 查找条件，格式为 {key: "value"}
 * @return {*} 返回匹配的项，如果没有找到则返回undefined
 * @example
 * // 基本用法
 * const users = [
 *   { id: 1, name: "张三" },
 *   { id: 2, name: "李四" }
 * ]
 * const user = findItemsInJson(users, { id: 1 }) // 返回 { id: 1, name: "张三" }
 *
 * // 嵌套数组查找
 * const menu = [
 *   {
 *     title: "首页",
 *     key: "home",
 *     children: [
 *       { title: "概览", key: "overview" }
 *     ]
 *   }
 * ]
 * const item = findItemsInJson(menu, { key: "overview" }) // 返回 { title: "概览", key: "overview" }
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function findItem<T extends Record<string, any>, K extends keyof T>(
  array: T[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  criteria: Partial<Record<K, any>>
): T | undefined {
  if (!array || !Array.isArray(array) || array.length === 0) {
    return undefined
  }

  if (!criteria || typeof criteria !== "object") {
    return undefined
  }

  const criteriaKey = Object.keys(criteria)[0] as K & string
  const criteriaValue = criteria[criteriaKey]

  // 递归搜索函数
  const search = (items: T[]): T | undefined => {
    for (const item of items) {
      // 检查当前项是否匹配条件
      if (item[criteriaKey] === criteriaValue) {
        return item
      }

      // 如果当前项有children属性且是数组，递归搜索
      if (item.children && Array.isArray(item.children) && item.children.length > 0) {
        const found = search(item.children as T[])
        if (found) {
          return found
        }
      }
    }
    return undefined
  }

  return search(array)
}

/**
 * @description 滚动到目标元素居中
 * @param container 滚动容器
 * @param targetItem 目标元素
 */
export const scrollToCenter = (container: HTMLElement, targetItem: HTMLElement) => {
  if (isSSR || !container || !targetItem) {
    return
  }

  const containerRect = container.getBoundingClientRect()
  const targetItemRect = targetItem.getBoundingClientRect()

  const scrollTop =
    container.scrollTop +
    targetItemRect.top -
    containerRect.top -
    containerRect.height / 2 +
    targetItemRect.height / 2

  container.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  })
}
