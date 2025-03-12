/**
 * @description 判断是否为SSR模式
 * @date 30/09/2022
 * @return {*}  boolean
 */
export const isSSR = (function () {
  try {
    return (
      typeof window === "undefined" ||
      !window.navigator ||
      /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
    )
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
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")

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
