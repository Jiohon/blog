import { useMemo, useState } from "react"

import SevenSegmentDisplay from "@/components/SevenSegmentDisplay"
import { useThemeMode } from "@/hooks/useThemeMode"

import Screw from "./Screw"
import { useStyles } from "./style"

const neonColors = [
  { background: "#0c0c0c", activeColor: "#ff5e00", inactiveColor: "#161616" },
  { background: "#0c0c0c", activeColor: "#ffffff", inactiveColor: "#161616" },
  { background: "#0c0c0c", activeColor: "#6cb71b", inactiveColor: "#161616" },
  { background: "#0c0c0c", activeColor: "#7556ff", inactiveColor: "#161616" },
  { background: "#0c0c0c", activeColor: "#568cff", inactiveColor: "#161616" },
  { background: "#0c0c0c", activeColor: "#ff5656", inactiveColor: "#161616" },
]

const NeonLighting = () => {
  const { isDarkMode } = useThemeMode()
  const [isToggled, setToggle] = useState(false)
  const [neonColorIdx, setNeonColorIdx] = useState(0)

  const colorPattern = useMemo(() => {
    if (isDarkMode) {
      return neonColors[neonColorIdx % neonColors.length]
    }
    if (isToggled) {
      return {
        background: "#ccc75f",
        activeColor: "#5a571c",
        inactiveColor: "#c4bf48",
      }
    }
    return {
      background: "#eff1f5",
      activeColor: "#adb0b8",
      inactiveColor: "#eff1f5",
    }
  }, [isDarkMode, isToggled, neonColorIdx])

  const { styles, cx } = useStyles(colorPattern.activeColor)

  return (
    <button
      className={styles.neonLighting}
      onClick={() => {
        if (!isDarkMode) {
          setToggle((s) => !s)
        } else {
          setNeonColorIdx(neonColorIdx + 1)
        }
      }}
    >
      <SevenSegmentDisplay
        value={1111}
        minLength={6}
        digitSize={18}
        digitSpacing={6}
        segmentThickness={2}
        segmentSpacing={0.5}
        segmentActiveColor={colorPattern.activeColor}
        segmentInactiveColor={colorPattern.inactiveColor}
        backgroundColor={colorPattern.background}
        padding={"10px 14px"}
        glow
      />
      <div className={cx(styles.twinkling)}></div>
      {/* 使中心看起来更亮 */}
      {isDarkMode && <div className={styles.DarkModeBright}></div>}
      {/* Glass cover */}
      <div className={cx(styles.GlassCover)}>
        {/* 4 颗小螺丝儿 */}
        {isDarkMode && (
          <>
            <Screw className="left-top" />
            <Screw className="right-top" />
            <Screw className="left-bottom" />
            <Screw className="right-bottom" />
          </>
        )}
      </div>
    </button>
  )
}

export default NeonLighting
