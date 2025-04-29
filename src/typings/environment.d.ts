declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * 是否筛选未发布文章
     */
    GATSBY_NOT_PUBLISHED: "true" | "false"

    /**
     * 评论组件 - GitHub 仓库
     */
    GATSBY_REPO: string

    /**
     * 评论组件 - GitHub 仓库 ID
     */
    GATSBY_REPO_ID: string

    /**
     * 评论组件 - 讨论区分类名称
     */
    GATSBY_CATEGORY: string

    /**
     * 评论组件 - 讨论区分类ID
     */
    GATSBY_CATEGORY_ID: string
  }
}
