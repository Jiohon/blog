import React from "react"

import { useSpotlight } from "@/hooks/useSpotlight"
import { animated, useSpring } from "@react-spring/web"

import { useStyles } from "./style"

export interface SpotlightCardProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  /**
   * 聚光灯颜色
   * @default 'rgb(147 ,117 ,255,  50%)'
   */
  spotlightColor?: string
}

const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 60,
  (x - rect.left - rect.width / 2) / 60,
  1.02,
]

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  style,
  spotlightColor = "rgb(147 ,117 ,255,  50%)",
}) => {
  const ref = useSpotlight(spotlightColor)
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  const { styles, cx } = useStyles()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    // 仅处理 3D 倾斜效果
    set({ xys: calc(e.clientX, e.clientY, rect) })
  }

  const handleMouseLeave = () => {
    // 复位 3D 倾斜
    set({ xys: [0, 0, 1] })
  }

  return (
    <animated.div
      ref={ref}
      className={cx(styles.cardContainer, className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: props.xys.to(trans),
        // 使用 background-image 叠加在 background-color 上
        backgroundImage: `radial-gradient(100px circle at var(--x) var(--y), var(--spotlight-color), transparent 90%)`,
      }}
    >
      <div
        className={styles.spotlight}
        style={{
          backgroundImage: `radial-gradient(100px circle at var(--x) var(--y), var(--spotlight-color), transparent 90%)`,
        }}
      />
      <div className={styles.content}>{children}</div>
    </animated.div>
  )
}

export default SpotlightCard
