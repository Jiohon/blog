/**
 * @description 获取 是否筛选未发布文章标志
 * @returns {boolean}
 */
export const getNotPublished = () => {
  try {
    if (process.env.NODE_ENV === "production") {
      return false
    }

    const GATSBY_NOT_PUBLISHED = JSON.parse(process.env.GATSBY_NOT_PUBLISHED)

    return GATSBY_NOT_PUBLISHED
  } catch (error) {
    false
  }
}
