import { createStyles, keyframes } from "antd-style"
import color from "color"

export const useStyles = createStyles(
  ({ css, cx, token, prefixCls, isDarkMode }, activeColor: string) => {
    const backdropFlicker = keyframes`
            50% {
            -webkit-backdrop-filter: blur(1px) brightness(20%);
            backdrop-filter: blur(1px) brightness(20%);
          }
  `

    const brightColor = () => 1 - color(activeColor).luminosity()

    return {
      neonLighting: cx(
        `${prefixCls}-NeonLighting`,
        css`
          position: relative;
          display: flex;
          padding: 0;
          border: none;
          border-radius: 2px;
          overflow: hidden;
        `
      ),
      screw: cx(
        `${prefixCls}-NeonLighting-screw`,
        css`
          position: relative;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: ${token.gray3};
          background: conic-gradient(#333, #666, #333, #666, #333);
          box-shadow: ${token.colorWhite} 0px 0px 0px 0px, ${token.gray10} 0px 0px 0px 1px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px;

          &.left-top {
            position: absolute;
            top: 0.25rem;
            left: 0.25rem;
            transform: matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0);
          }
          &.right-top {
            position: absolute;
            top: 0.25rem;
            right: 0.25rem;
            transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0);
          }
          &.left-bottom {
            position: absolute;
            left: 0.25rem;
            bottom: 0.25rem;
            transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0);
          }
          &.right-bottom {
            position: absolute;
            right: 0.25rem;
            bottom: 0.25rem;
            transform: matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0);
          }
        `
      ),
      twinkling: cx(
        `${prefixCls}-NeonLighting-twinkling`,
        css`
          position: absolute;
          inset: 0;
          z-index: 10;
          animation: ${backdropFlicker} 0.1s linear 4 alternate;
          pointer-events: none;
        `
      ),
      DarkModeBright: cx(
        `${prefixCls}-NeonLighting-bright`,
        css`
          ${isDarkMode &&
          css`
            position: absolute;
            inset: 0;
            z-index: 10;
            mix-blend-mode: overlay;
            pointer-events: none;
            background: radial-gradient(rgba(255, 255, 255, ${brightColor()}), transparent 50%);
          `}
        `
      ),
      GlassCover: cx(
        `${prefixCls}-NeonLighting-glassCover`,
        css`
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          background-image: url(/svg/hit-counter-glass-cover.svg);
          background-size: cover;
          background-position: center;
          box-shadow: 0 0 1px rgba(255, 255, 255, 0.1) inset,
            0 1px 1px rgba(255, 255, 255, 0.1) inset;

          ${isDarkMode &&
          css`
            backdrop-filter: blur(0.25px) brightness(1.5);
          `};
        `
      ),
    }
  }
)
