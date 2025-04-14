import { createStyles } from "antd-style"

export const useStyles = createStyles<{
  componentPrefixCls: string
  countLine: number
}>(({ css, cx, token, prefixCls }, { componentPrefixCls, countLine }) => {
  return {
    PrismCode: cx(
      `${prefixCls}-${componentPrefixCls}-code`,
      css`
        display: inline-block;
        font-family: inherit;
        font-size: 0.95rem;
        font-weight: normal;
        background-color: transparent;
        word-spacing: normal;
        word-break: normal;
        overflow-wrap: normal;
        tab-size: 4;
        hyphens: none;
        line-height: 1.6rem;
        min-width: 100%;
        padding-block-end: 0.6rem;

        /* padding-block-start: 0.3rem;
        padding-block-end: 0.7rem; */

        &:hover {
          .${prefixCls}-${componentPrefixCls}-code-line {
            opacity: 1;
          }
        }
      `
    ),

    line: cx(
      `${prefixCls}-${componentPrefixCls}-code-line`,
      css`
        display: flex;
        position: relative;
        height: 1.6rem;
        line-height: 1.6rem;
        padding-inline-end: 1.3rem;
        font-family: inherit;
        transition: opacity 0.25s ease-in-out;

        &.opacity {
          opacity: 0.65;
        }

        &.lineNumber {
          &:before {
            content: attr(data-line);
            box-sizing: content-box;
            position: sticky;
            left: 0;
            display: inline-block;
            min-width: ${countLine * 0.55}rem;
            text-align: right;
            font-size: 0.85rem;
            color: ${token.colorTextQuaternary};
            padding-inline-start: 1.3rem;
            padding-inline-end: 1rem;
            background-color: ${token.colorBgElevated};
          }
        }

        &.LineHighlight {
          opacity: 1;
        }

        &.LineHighlight,
        &.LineHighlight:before {
          background: linear-gradient(
            90deg,
            ${token.colorPrimaryBorderHover} 0% 0.29rem,
            ${token.colorPrimaryBgHover} 0.29rem 100%
          );
        }
      `
    ),
  }
})
