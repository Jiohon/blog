import { createStyles } from "antd-style"

export const useStyles = createStyles<string>(
  ({ css, cx, token, prefixCls }, componentPrefixCls) => ({
    PrismScorll: cx(
      `${prefixCls}-${componentPrefixCls}-code-scorll`,
      css`
        box-sizing: content-box;
        overflow: overlay;
        font-family: inherit;
        padding-block-end: 0.65rem;
      `
    ),

    PrismCode: cx(
      `${prefixCls}-${componentPrefixCls}-code`,
      css`
        display: inline-flex;
        flex-wrap: nowrap;
        font-family: inherit;
        font-size: 0.95rem;
        font-weight: normal;
        background-color: transparent;
        word-spacing: normal;
        word-break: normal;
        overflow-wrap: normal;
        tab-size: 4;
        hyphens: none;
        width: auto;
        min-width: 100%;
        line-height: 22px;
        margin: 0;
        padding: 0;
      `
    ),

    lineNumbers: cx(
      `${prefixCls}-${componentPrefixCls}-code-lineNumbers`,
      css`
        display: flex;
        flex-direction: column;
        position: sticky;
        left: 0;
        z-index: 1;
        font-size: 0.85rem;
        line-height: 22px;

        .number {
          display: inline-block;
          user-select: none;
          padding-inline: 1rem;
          text-align: right;
          background-color: ${token.colorBgElevated};
          color: ${token.colorTextQuaternary};
        }
      `
    ),

    lines: cx(
      `${prefixCls}-${componentPrefixCls}-code-lines`,
      css`
        font-family: inherit;
        flex: 1;

        .line {
          position: relative;
          padding-inline-start: 0.8rem;
          padding-inline-end: 1.2rem;

          span {
            font-family: inherit;
          }
        }
      `
    ),

    LineHighlight: cx(
      `${prefixCls}-${componentPrefixCls}-code-CodeHighlight`,
      css`
        &.number {
          background: linear-gradient(
            90deg,
            ${token.colorPrimaryBorderHover} 0% 10%,
            ${token.colorPrimaryBgHover} 10% 100%
          );
        }
        &.line {
          background-color: ${token.colorPrimaryBgHover};
        }
      `
    ),
  })
)
