import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, prefixCls }) => {
  return {
    sevenSegmentDisplay: cx(
      `${prefixCls}-sevenSegmentDisplay`,
      css`
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
      `
    ),
    digit: cx(
      `${prefixCls}-sevenSegmentDisplay-digit`,
      css`
        position: relative;

        .NotLitUp {
          position: absolute;
        }

        .lighted {
          position: relative;
        }
      `
    ),
  }
})
