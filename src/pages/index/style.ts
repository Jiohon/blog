import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, stylish, cx, responsive: r, token, prefixCls }) => ({
  home: cx(
    `${prefixCls}-home-container`,
    css`
      ${stylish.container}
    `
  ),

  briefDescription: cx(
    `${prefixCls}-home-description`,
    css`
      -webkit-font-smoothing: antialiased;
      margin-block-start: 2rem;
      margin-block-end: 0;
      font-size: 1rem;
      line-height: 1.4;
      color: ${token.colorTextSecondary};
      font-family: Coalhandluketrial;

      ${r({
        tablet: css`
          font-size: 0.9rem;
          margin-block-start: 2rem;
        `,
      })}
    `
  ),

  wrapper: cx(
    `${prefixCls}-home-wrapper`,
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;

      ${r({
        laptop: css`
          gap: 2.5rem;
        `,
        tablet: css`
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        `,
        mobile: css`
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        `,
      })}
    `
  ),

  latestCard: cx(
    `${prefixCls}-home-latest-card`,
    css`
      min-height: 10rem;

      .${prefixCls}-card-body {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        height: 100%;
        padding-block: 14px;
      }

      ${r({
        laptop: css`
          min-height: 9rem;
        `,
        tablet: css`
          min-height: 8.5rem;
        `,
        mobile: css`
          min-height: 8rem;
        `,
      })}
    `
  ),

  highlightCard: cx(
    `${prefixCls}-home-highlight-card`,
    css`
      min-height: 10rem;

      .${prefixCls}-card-body {
        display: flex;
        align-items: center;
        height: 100%;
        padding-block: 14px;
      }

      .content {
        display: flex;
        flex-wrap: wrap;
        align-content: space-evenly;
        height: 100%;
        margin-inline-start: 1.2rem;
      }
    `
  ),

  time: cx(
    `${prefixCls}-home-time`,
    css`
      display: block;
      width: 100%;
      color: ${token.magenta5};
      font-size: 0.75rem;

      ${r({
        tablet: css`
          font-size: 0.7rem;
        `,
      })}
    `
  ),

  titleLink: cx(
    `${prefixCls}-home-titleLink`,
    css`
      display: inline-flex;
      align-items: center;
      font-size: 0.95rem;
      color: ${token.colorText};
      font-weight: 600;
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

      ${r({
        tablet: css`
          font-size: 0.85rem;
        `,
      })}
    `
  ),

  tagLinks: cx(
    `${prefixCls}-card-tagLinks`,
    css`
      width: 100%;
      display: flex;
      gap: 0.35rem;

      a {
        font-size: 0.75rem;
        color: ${token.colorTextDescription};
        background: linear-gradient(
            to right,
            ${token.colorTextSecondary},
            ${token.colorTextSecondary}
          )
          no-repeat;
        background-size: 0 1px;
        background-position: right bottom;
        transition: background-size 0.3s;

        &:hover {
          color: ${token.colorText};
          background-size: 100% 1px;
          background-position: left bottom;
        }

        ${r({
          tablet: css`
            font-size: 0.7rem;
          `,
        })}
      }
    `
  ),
}))
