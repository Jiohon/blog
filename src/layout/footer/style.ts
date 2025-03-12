import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, responsive: r, cx, token, prefixCls }) => ({
  footer: cx(
    `${prefixCls}-layout-footer`,
    css`
      display: flex;
      flex-wrap: wrap;
      align-content: space-evenly;
      justify-content: center;
      min-height: ${token.footerHeight}px;
      padding-block: 2.5rem;
      padding-block-end: 5rem;
      color: ${token.colorTextTertiary};
      gap: 1.2rem;

      ${r({
        mobile: css`
          min-height: ${token.footerHeightMobile}px;
          padding-block: 3rem;
        `,
      })}
    `
  ),

  powered: cx(
    `${prefixCls}-layout-footer-powered`,
    css`
      display: flex;
      align-items: center;
      color: inherit;
      font-size: 0.85rem;
      line-height: 1.2;
      padding-inline: 0.5rem;

      .author {
        font-weight: bold;
        margin-left: 0.2rem;
      }
    `
  ),

  wrapper: cx(
    `${prefixCls}-layout-footer-wrapper`,
    css`
      justify-content: center;
      color: ${token.colorTextTertiary};
      width: 100%;
    `
  ),

  href: cx(
    `${prefixCls}-layout-footer-wrapper-href`,
    css`
      display: flex;
      align-items: center;
      color: inherit !important;
      font-size: 0.85rem;
      line-height: 1.2;
      padding-inline: 0.5rem;

      svg {
        margin-inline: 0.5rem;
      }

      &:hover {
        text-decoration: underline;
        color: ${token.colorText} !important;
      }
    `
  ),
}))
