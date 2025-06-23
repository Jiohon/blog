import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, stylish, responsive: r, token, prefixCls }) => ({
  container: cx(
    `${prefixCls}-404-container`,
    css`
      ${stylish.container}
      height: calc(100vh - ${token.headerHeight}px);
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding-bottom: ${token.headerHeight}px;

      ${r({
        mobile: css`
          height: calc(100vh - ${token.headerHeightMobile}px);
          padding-bottom: ${token.headerHeightMobile}px;
        `,
      })}

      .tip {
        width: 100%;
        text-align: center;
        font-family: Rubik Glitch;
        font-size: 6rem;
        letter-spacing: 4px;
        color: ${token.colorPrimaryBorder};

        ${r({
          laptop: css`
            font-size: 5rem;
          `,
          mobile: css`
            font-size: 4rem;
          `,
        })}
      }
    `
  ),
  buttonContainer: css`
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    pointer-events: auto;
  `,
  tipText: css`
    margin-bottom: 16px;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${token.colorTextSecondary};
  `,
}))
