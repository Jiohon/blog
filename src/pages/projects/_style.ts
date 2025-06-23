import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, stylish, prefixCls, token, responsive: r }) => ({
  projects: cx(
    `${prefixCls}-projects-container`,
    css`
      ${stylish.container}

      gap: 0;
    `
  ),
  wrapper: cx(
    `${prefixCls}-projects-wrapper`,
    css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    `
  ),
  projectCard: cx(
    `${prefixCls}-project-card`,
    css`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `
  ),
  projectName: cx(
    `${prefixCls}-project-name`,
    css`
      display: inline-flex;
      align-items: center;
      font-size: 1.3rem;
      font-weight: bold;
      padding: 0;
      border: 0;
      background: linear-gradient(
          to right,
          ${token.colorTextSecondary},
          ${token.colorTextSecondary}
        )
        no-repeat;
      background-size: 0 1px;
      background-position: right bottom;
      transition: background-size 0.25s;

      &:hover {
        color: ${token.colorText};
        background-size: 100% 1px;
        background-position: left bottom;
      }

      &.site-typography {
        color: ${token.colorText};
      }

      ${r({
        mobile: css`
          font-size: 1.2rem;
        `,
      })}
    `
  ),
  projectDescription: cx(
    `${prefixCls}-project-description`,
    css`
      font-size: 1rem;
      color: ${token.colorTextDescription};
    `
  ),
}))
