import React from "react"

import Digit from "./Digit"
import SevenSegmentDisplayProvider from "./Provider"
import { useStyles } from "./style"
import { DigitType } from "./types"

export interface RetroHitCounterProps {
  value: number
  minLength?: number
  digitSize?: number
  digitSpacing?: number
  segmentThickness?: number
  segmentSpacing?: number
  segmentActiveColor?: string
  segmentInactiveColor?: string
  backgroundColor?: string
  padding?: number | string
  glow?: boolean // 微光效果
}

const RetroHitCounter: React.FC<RetroHitCounterProps> = (props) => {
  const {
    value,
    minLength = 4,
    digitSize = 40,
    digitSpacing = digitSize / 4,
    segmentThickness = digitSize / 8,
    segmentSpacing = segmentThickness / 4,
    segmentActiveColor = "#adb0b8",
    segmentInactiveColor = "#eff1f5",
    backgroundColor = "#eff1f5",
    padding = digitSize / 4,
    glow = false,
  } = props

  const { styles } = useStyles()

  const paddedValue = value.toString().padStart(minLength, "0")
  const individualDigits = paddedValue.split("")

  return (
    <SevenSegmentDisplayProvider
      digitSize={digitSize}
      segmentThickness={segmentThickness}
      segmentSpacing={segmentSpacing}
      segmentActiveColor={segmentActiveColor}
      segmentInactiveColor={segmentInactiveColor}
      glow={glow}
    >
      <div
        className={styles.sevenSegmentDisplay}
        style={{ padding, backgroundColor, gap: digitSpacing }}
      >
        {individualDigits.map((digit, idx) => (
          <Digit key={idx} value={Number(digit) as DigitType} />
        ))}
      </div>
    </SevenSegmentDisplayProvider>
  )
}

export default RetroHitCounter
