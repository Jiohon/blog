import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, stylish, responsive: r, cx, token, prefixCls }) => ({
  header: cx(
    `${prefixCls}-layout-header`,
    css`
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 20;
      height: ${token.headerHeight}px;
      backdrop-filter: saturate(50%) blur(4px);
      background-size: 3px 3px;
      background-image: radial-gradient(transparent 1px, ${token.colorBgLayout} 1px);
      box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.028);

      ${r({
        mobile: css`
          height: ${token.headerHeightMobile}px;
        `,
      })};
    `
  ),

  wrapper: cx(
    `${prefixCls}-layout-header-wrapper`,
    css`
      ${stylish.container}

      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      color: ${token.colorTextSecondary};

      .${prefixCls}-space {
        column-gap: 3rem;

        ${r({
          laptop: css`
            column-gap: 2.5rem;
          `,
          mobile: css`
            column-gap: 1.8rem;
          `,
        })}
      }
    `
  ),

  link: cx(
    `${prefixCls}-layout-header-wrapper-link`,
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 30px;
      height: 100%;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      color: inherit;
      padding: 0;
      border: none;
      border-radius: 0;
      letter-spacing: 0.02rem;
      transition: all ${token.motionDurationSlow};

      &:hover {
        color: ${token.colorPrimary};

        &.logo {
          transform: scale(1.16);
        }
      }

      &.logo {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        font-family: Coalhandluketrial;
        font-weight: bold;
        text-align: center;
        color: transparent;
        background: ${token.gradientLogo};
        background-clip: text;
        transition: all ${token.motionDurationSlow};
      }
    `
  ),
}))
