import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  about: cx(
    `${prefixCls}-about-container`,
    css`
      ${stylish.template}

      ${r({
        tablet: css`
          display: block;

          .content {
            margin-block-end: 2rem;
          }
        `,
      })}
    `
  ),

  title: cx(
    `${prefixCls}-about-title`,
    css`
      &.${prefixCls}-typography {
        padding-block-start: 7rem;
        padding-block-end: 2rem;
        margin: 0;
        font-weight: bold;
        font-family: ${token.fontFamilyCode};

        ${r({
          tablet: css`
            padding-block-start: 5rem;
            padding-block-end: 2rem;
            font-size: 23px;
          `,
          mobile: css`
            font-size: 22px;
          `,
        })}
      }
    `
  ),
}))
