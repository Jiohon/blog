import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, token, responsive: r, prefixCls }) => {
  return {
    levelStyle: cx(
      `${prefixCls}-level`,
      css`
        &.h1 {
          ${r({
            tablet: css`
              font-size: 37.5px;
            `,
            mobile: css`
              font-size: 37px;
            `,
          })}
        }
        &.h2 {
          margin-block: 7.5rem 3.5rem;
          ${r({
            tablet: css`
              font-size: 29.5px;
            `,
            mobile: css`
              font-size: 29px;
            `,
          })}
        }
        &.h3 {
          margin-block: 5.5rem 2.5rem;
          ${r({
            tablet: css`
              font-size: 23.5px;
            `,
            mobile: css`
              font-size: 23px;
            `,
          })}
        }
        &.h4 {
          margin-block: 3.5rem 2rem;
          scroll-margin-top: 90px;
          ${r({
            tablet: css`
              font-size: 19.5px;
            `,
            mobile: css`
              font-size: 19px;
            `,
          })}
        }
        &.h5 {
          margin-block-end: 1rem;
          ${r({
            tablet: css`
              font-size: 15.5px;
            `,
            mobile: css`
              font-size: 15px;
            `,
          })}
        }
      `
    ),

    heading: css`
      &.${prefixCls}-typography {
        position: relative;
        color: ${token.colorText};
        font-family: ${token.fontFamilyCode};
      }

      a {
        color: ${token.colorTextDisabled};
        font-size: 1.75rem;
        font-weight: bold;
      }

      &:hover {
        a {
          opacity: 1;
        }
      }
    `,

    link: cx(
      `${prefixCls}-link`,
      css`
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        scroll-margin-top: 90px;
        transform: translateX(calc(-100% - 0.2rem));
        padding-inline-end: 4px;
        height: 100%;
        opacity: 0;

        color: ${token.colorPrimaryHover};
      `
    ),
  }
})
