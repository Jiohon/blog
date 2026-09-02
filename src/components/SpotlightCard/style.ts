import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, token, prefixCls, isDarkMode }) => {
  return {
    cardContainer: cx(
      `${prefixCls}-SpotlightCard`,
      css`
        position: relative;
        display: inline-block;
        border-radius: ${token.borderRadiusLG}px;
        will-change: transform;
        transform-style: preserve-3d;
        cursor: pointer;
        padding: 1px;
        background-color: ${token.colorBorderFourth};

        /* 默认的一些阴影 */
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);

        &:hover {
          /* 悬停时的额外阴影或效果 */
        }
      `
    ),
    spotlight: cx(
      `${prefixCls}-SpotlightCard-spotlight`,
      css`
        pointer-events: none;
        position: absolute;
        inset: 0;
        z-index: 2;
        border-radius: inherit;
        mix-blend-mode: ${isDarkMode ? "overlay" : "screen"};
        /* 具体的渐变由内联样式控制 */
      `
    ),
    content: cx(
      `${prefixCls}-SpotlightCard-content`,
      css`
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        border-radius: ${token.borderRadiusLG - 1}px; /* 稍微减小一点以适应 padding */
        overflow: hidden;
        background-color: ${token.colorBgContainer};

        > div {
          border: none !important;
        }
      `
    ),
  }
})
