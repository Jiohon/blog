import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, stylish, cx, responsive: r, token, prefixCls }) => ({
  home: cx(
    `${prefixCls}-home-container`,
    css`
      ${stylish.container}
    `
  ),
  hero: cx(
    `${prefixCls}-home-hero`,
    css`
      width: 100%;
      padding-block: clamp(1rem, 3vw, 2.5rem) 0;

      .${prefixCls}-briefHeader {
        padding-block: 1.25rem 2rem;
      }
    `
  ),
  eyebrow: cx(
    `${prefixCls}-home-eyebrow`,
    css`
      color: ${token.colorPrimary};
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
    `
  ),
  heroMeta: cx(
    `${prefixCls}-home-heroMeta`,
    css`
      display: flex;
      justify-content: space-between;
      padding-block: 0.75rem;
      border-block: 1px solid ${token.colorBorderSecondary};
      color: ${token.colorTextQuaternary};
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.04em;
    `
  ),

  briefDescription: cx(
    `${prefixCls}-home-description`,
    css`
      -webkit-font-smoothing: antialiased;
      margin-block-start: 1rem;
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
  section: cx(
    `${prefixCls}-home-section`,
    css`
      width: 100%;
      margin-block-start: 3.5rem;
    `
  ),

  wrapper: cx(
    `${prefixCls}-home-wrapper`,
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-block-start: 1.25rem;
      gap: 1.25rem;

      ${r({
        laptop: css`
          gap: 1.5rem;
        `,
        tablet: css`
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        `,
        mobile: css`
          grid-template-columns: repeat(1, 1fr);
          gap: 0.875rem;
        `,
      })}
    `
  ),

  latestCard: cx(
    `${prefixCls}-home-latest-card`,
    css`
      height: 11rem;

      &.${prefixCls}-card {
        border: 1px solid ${token.colorBorderSecondary};
        background: color-mix(in srgb, ${token.colorBgContainer} 84%, transparent);
        box-shadow: ${token.boxShadowTertiary};
      }

      .${prefixCls}-card-body {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        height: 100%;
        padding-block: 14px;
      }

      ${r({
        laptop: css`
          height: 9rem;
        `,
        tablet: css`
          height: 8.5rem;
        `,
        mobile: css`
          height: 8rem;
        `,
      })}
    `
  ),

  highlightCard: cx(
    `${prefixCls}-home-highlight-card`,
    css`
      min-height: 11rem;

      &.${prefixCls}-card {
        border: 1px solid ${token.colorBorderSecondary};
        background: color-mix(in srgb, ${token.colorBgContainer} 84%, transparent);
        box-shadow: ${token.boxShadowTertiary};
      }

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
      color: ${token.colorPrimary};
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.04em;

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
      font-size: 1rem;
      color: ${token.colorText};
      font-weight: 650;
      letter-spacing: -0.01em;
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
