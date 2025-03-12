import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, stylish, responsive: r, prefixCls }) => ({
  archive: cx(
    `${prefixCls}-archive-container`,
    css`
      ${stylish.container}

      display: grid;
      grid-template-columns: auto 260px;
      gap: 4rem;

      ${r({
        tablet: css`
          display: block;
        `,
      })}
    `
  ),
}))
