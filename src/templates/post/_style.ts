import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  post: cx(
    `${prefixCls}-post-container`,
    css`
      ${stylish.template}

      ${r({
        tablet: css`
          display: block;

          .content {
            margin-block-end: 2rem;
          }
        `,
      })}
    `
  ),

  title: cx(
    `${prefixCls}-post-title`,
    css`
      &.${prefixCls}-typography {
        margin: 0;
        font-family: Rubik Glitch;
        font-size: clamp(2rem, 4vw, 2.6rem);
        font-weight: normal;
        letter-spacing: 0.3rem;
        line-height: 1.2;

        span {
          color: ${token.colorPrimary};
        }
      }
    `
  ),

  information: cx(
    `${prefixCls}-post-information`,
    css`
      width: 100%;
      padding-block: 0.75rem;
      border-block: 1px solid ${token.colorBorderSecondary};
      font-size: 13px;

      .times {
        width: 100%;
        padding-block-end: 0.75rem;
        color: ${token.colorTextDescription};
      }

      .${prefixCls}-tag {
        display: inline-flex;
        align-items: center;
        min-height: 1.9rem;
        margin-block: 0.3rem;
        margin-inline-end: 0.35rem;
        padding-block: 0.1rem;
        padding-inline: 0.6rem;
        border: 1px solid ${token.colorBorderSecondary};
        border-radius: 999px;
        background: color-mix(in srgb, ${token.colorBgContainer} 78%, transparent);
        color: ${token.colorTextSecondary};
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        cursor: pointer;
        transition: transform 0.2s ease, color 0.2s ease, background-color 0.2s ease,
          border-color 0.2s ease;

        &:hover {
          border-color: ${token.colorPrimaryBorder};
          background: ${token.colorPrimaryBg};
          color: ${token.colorPrimary};
          transform: translateY(-1px);
        }

        @media (prefers-reduced-motion: reduce) {
          transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

          &:hover {
            transform: none;
          }
        }
      }
    `
  ),
  hero: cx(
    `${prefixCls}-post-hero`,
    css`
      display: grid;
      gap: 1.25rem;
      padding-block: clamp(1rem, 3vw, 2.5rem) 2rem;
    `
  ),
  eyebrow: cx(
    `${prefixCls}-post-eyebrow`,
    css`
      color: ${token.colorPrimary};
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
    `
  ),
  description: cx(
    `${prefixCls}-post-description`,
    css`
      max-width: 42rem;
      margin: 0;
      color: ${token.colorTextSecondary};
      font-size: 1rem;
      line-height: 1.65;
    `
  ),
}))
