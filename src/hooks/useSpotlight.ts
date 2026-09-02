import { useEffect, useRef } from "react"
import type { RefObject } from "react"

export const useSpotlight = (spotlightColor: string): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      if (!ref.current) {
        return
      }

      const rect = ref.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      ref.current.style.setProperty("--x", `${x}px`)
      ref.current.style.setProperty("--y", `${y}px`)
      ref.current.style.setProperty("--spotlight-color", spotlightColor)
    }

    ref.current?.style.setProperty("--x", "-1000px")
    ref.current?.style.setProperty("--y", "-1000px")

    window.addEventListener("mousemove", handleWindowMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove)
    }
  }, [spotlightColor])

  return ref
}
