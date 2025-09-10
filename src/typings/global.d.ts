/**
 * @description 导航栏Item
 * @date 10/08/2023
 * @interface MenuItem
 */
interface MenuItem {
  url: string
  icon: string
  label: string
  show: boolean
}

/**
 * @description View Transitions API 类型声明
 * @interface ViewTransition
 */
interface ViewTransition {
  finished: Promise<void>
  ready: Promise<void>
  updateCallbackDone: Promise<void>
  skipTransition(): void
}

/**
 * @description 扩展Document接口以支持View Transitions API
 */
interface Document {
  startViewTransition?: (callback?: () => void | Promise<void>) => ViewTransition
}
