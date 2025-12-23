import type { TransitionFunction } from "react"
import { startTransition } from "react"

export const safeStartTransition = (func: TransitionFunction) => {
  if (typeof startTransition === "function") {
    startTransition(func)
  } else {
    func()
  }
}
