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
      padding-block: 0.3rem;
      margin-block: 1.6rem;
      background-color: transparent;
      transition: all ${token.motionDurationSlow};
      color: inherit;

      &:hover {
        transform: translate3d(0.85rem, 0px, 0px);
      }

      .infos {
        flex: 1;
        padding-inline: 1.3rem;
        color: ${token.colorText};
      }

      h5 {
        flex: 1;
        margin: 0;
        font-size: 0.95rem;
        font-weight: 600;
        line-height: 1.5;
        color: inherit;
        transition: all 0.3s;
        margin-bottom: 2px;

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
        font-size: 0.8rem;
        font-weight: 500;
      }
    `
  ),
}))
