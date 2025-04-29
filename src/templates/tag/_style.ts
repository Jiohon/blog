import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, stylish, responsive: r, prefixCls }) => ({
  tag: cx(
    `${prefixCls}-tag-container`,
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
}))
