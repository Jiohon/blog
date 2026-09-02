import React, { useContext, useMemo } from "react"

import color from "color"

import { SevenSegmentDisplayContext } from "./Provider"
import Segment from "./Segment"
import { useStyles } from "./style"
import { isSegmentActive } from "./utils"

import type { DigitType, SegmentID } from "./types"

const segments: SegmentID[] = ["a", "b", "c", "d", "e", "f", "g"]

export interface DigitProps {
  value: DigitType
}

const Digit: React.FC<DigitProps> = ({ value }) => {
  const { styles } = useStyles()
  const { digitSize, segmentThickness, segmentActiveColor, glow } = useContext(
    SevenSegmentDisplayContext
  )

  const width = digitSize * 0.5
  const height = digitSize
  const glowFilter = glow
    ? `drop-shadow(0 0 ${segmentThickness}px ${color(segmentActiveColor)
        .fade(0.15)
        .hexa()}) drop-shadow(0 0 ${segmentThickness * 1.75}px ${color(segmentActiveColor)
        .fade(0.45)
        .hexa()}) drop-shadow(0 0 ${segmentThickness * 2.75}px ${color(segmentActiveColor)
        .fade(0.7)
        .hexa()})`
    : "none"

  const activeSegments = useMemo(
    () => segments.filter((seg) => isSegmentActive(seg, value)),
    [value]
  )
  const inactiveSegments = useMemo(
    () => segments.filter((seg) => !isSegmentActive(seg, value)),
    [value]
  )

  return (
    <div className={styles.digit} style={{ width, height, lineHeight: `${height}px` }}>
      {/* 未点亮的 */}
      <svg
        className="NotLitUp"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {inactiveSegments.map((seg) => (
          <Segment key={seg} segmentId={seg} isActive={false} />
        ))}
      </svg>
      <svg
        className="depth"
        style={{
          filter: "brightness(0.55) saturate(1.2)",
          opacity: 0.7,
          transform: `translateY(${segmentThickness * 0.45}px)`,
        }}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {activeSegments.map((seg) => (
          <Segment key={seg} segmentId={seg} isActive />
        ))}
      </svg>
      {/* 点亮的 */}
      <svg
        className="lighted"
        style={{ filter: glowFilter, transform: "translateY(-0.25px)" }}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {activeSegments.map((seg) => (
          <Segment key={seg} segmentId={seg} isActive />
        ))}
      </svg>
    </div>
  )
}

export default Digit
