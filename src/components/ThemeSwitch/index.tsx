import { memo, useMemo } from "react"
import type { FC } from "react"

import { Button, Dropdown } from "antd"

import IconAuto from "@/components/Icons/Auto"
import IconDark from "@/components/Icons/Dark"
import IconLight from "@/components/Icons/Light"
import { useThemeMode } from "@/hooks/useThemeMode"
import { isSSR } from "@/utils/func"

import { useStyles } from "./style"

const items = [
  { key: "auto", label: " 跟随系统", icon: <IconAuto /> },
  { key: "light", label: " 亮色模式", icon: <IconLight /> },
  { key: "dark", label: " 暗色模式", icon: <IconDark /> },
]

const ThemeSwitch: FC = memo(() => {
  const { styles } = useStyles()
  const { themeMode, setThemeMode } = useThemeMode()

  const Icon = useMemo(() => items.find((item) => item?.key === themeMode)?.icon, [themeMode])

  const onClick = ({ key, domEvent }) => {
    if (isSSR) return

    if (!document.startViewTransition) {
      setThemeMode(key)
      return
    }

    const { clientX: x, clientY: y } = domEvent

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      setThemeMode(key)
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        [
          { clipPath: `circle(0% at ${x}px ${y}px)` },
          { clipPath: `circle(100% at ${x}px ${y}px)` },
        ],
        {
          duration: 500,
          easing: "ease-in",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    })
  }

  return (
    <>
      <Dropdown
        menu={{ items, selectable: true, selectedKeys: [themeMode], subMenuCloseDelay: 0, onClick }}
        trigger={["click"]}
        placement="bottom"
      >
        <Button className={styles.button} type="text">
          {Icon}
        </Button>
      </Dropdown>
    </>
  )
})

export default ThemeSwitch
