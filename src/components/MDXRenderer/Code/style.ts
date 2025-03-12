import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, token, prefixCls }) => {
  return {
    // code
    code: cx(
      `${prefixCls}-code`,
      css`
        color: ${token.colorPrimary};
        font-size: 0.95rem;
        background-color: ${token.colorFillDefaultBg};
        padding-block: 0.25rem;
        padding-inline: 0.45rem;
        border-radius: ${token.borderRadiusOuter}px;
        font-family: ${token.fontFamilyCode};
      `
    ),
  }
})
