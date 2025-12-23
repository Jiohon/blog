import { Button, Dropdown } from "antd"

import IconAuto from "@/components/Icons/Auto"
import IconDark from "@/components/Icons/Dark"
import IconLight from "@/components/Icons/Light"
import { useThemeMode } from "@/hooks/useThemeMode"
import { isSSR } from "@/utils/func"

import { useStyles } from "./style"

const items = [
  { key: "auto", label: " 自动", icon: <IconAuto /> },
  { key: "light", label: " 亮色", icon: <IconLight /> },
  { key: "dark", label: " 暗色", icon: <IconDark /> },
]

const ThemeSwitch: React.FC = () => {
  const { styles } = useStyles()
  const { themeMode, setThemeMode } = useThemeMode()

  const Icon = items.find((item) => item?.key === themeMode)?.icon

  const onClick = ({ key, domEvent }) => {
    if (isSSR) {
      return
    }

    if (!document?.startViewTransition) {
      setThemeMode(key)
      return
    }

    const { clientX: x, clientY: y } = domEvent

    const transition = document?.startViewTransition(() => {
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
        autoAdjustOverflow
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
}

export default ThemeSwitch
