import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, prefixCls }) => {
  return {
    a: cx(
      `${prefixCls}-a`,
      css`
        font-weight: 500;
        text-decoration: underline;
        font-family: SF Mono Medium;

        .${prefixCls}-code {
          color: inherit;
        }

        .svg {
          margin-left: 0.1em;
        }
      `
    ),
  }
})
