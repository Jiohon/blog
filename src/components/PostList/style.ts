import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, responsive: r, token, prefixCls }) => ({
  post: cx(
    `${prefixCls}-post`,
    css`
      margin-block-end: 3rem;
    `
  ),
  year: cx(
    `${prefixCls}-post-year`,
    css`
      color: ${token.colorPrimaryHover};
      padding-block-end: 0.8rem;
      border-block-end: 2px solid ${token.colorBorderSecondary};
      font-size: 1.8rem;
      opacity: 0.8;
      font-weight: bold;
      ${r({
        mobile: css`
          font-size: 1.5rem;
        `,
      })}
    `
  ),

  link: cx(
    `${prefixCls}-post-link`,
    css`
      display: flex;
      align-items: center;
      padding-block: 0.5rem;
      margin-block: 1.3rem;
      background-color: transparent;
      transition: all ${token.motionDurationSlow};
      color: inherit;

      &:hover {
        transform: translate3d(0.85rem, 0px, 0px);
        background-color: ${token.colorFillTertiary};
      }

      .infos {
        flex: 1;
        padding-inline: 1.3rem;
        color: ${token.colorText};
      }

      h5 {
          display: inline-flex;
          align-items: center;
          font-size: 1rem;
          color: ${token.colorText};
          font-weight: 600;
          margin: 0;
          padding: 0;
        }

        ${r({
          tablet: css`
            font-size: 0.85rem;
          `,
        })}
      }

      time {
        display: block;
        margin-inline-start: auto;
        color: ${token.colorTextDescription};
        font-size: 0.85rem;
        font-weight: 500;
      }
    `
  ),
}))
