import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, responsive: r, token, prefixCls }) => ({
  briefHeader: cx(
    `${prefixCls}-briefHeader`,
    css`
      position: relative;
      width: 100%;
      padding-block: 6rem 5.5rem;

      ${r({
        mobile: css`
          padding-block: 3.5rem 3rem;
        `,
      })}
    `
  ),

  description: cx(
    `${prefixCls}-briefHeader-description`,
    css`
      color: ${token.colorTextDescription};
      font-weight: 500;
      font-size: 1.2rem;
      margin-block-end: 1rem;

      span {
        color: ${token.colorPrimaryHover};
        font-family: Prisma;
        font-size: 1.6rem;
      }
    `
  ),

  title: cx(
    `${prefixCls}-briefHeader-title`,
    css`
      font-weight: 700;
      font-size: 2.6rem;
      letter-spacing: 0.1rem;
      margin: 0 !important;

      ${r({
        tablet: css`
          font-size: 2.2rem;
        `,
        mobile: css`
          font-size: 2rem;
        `,
      })}
    `
  ),

  greeting: cx(
    `${prefixCls}-briefHeader-greeting`,
    css`
      font-family: Coalhandluketrial;
      font-weight: normal;
      letter-spacing: 0.15rem;
      font-size: 2.2rem;
      letter-spacing: 0.3rem;
      margin: 0 !important;

      ${r({
        tablet: css`
          font-size: 1.9rem;
        `,
        mobile: css`
          font-size: 1.8rem;
        `,
      })}
    `
  ),

  highlightText: cx(
    `${prefixCls}-briefHeader-highlightText`,
    css`
      color: ${token.colorPrimaryBorderHover};
    `
  ),
}))
