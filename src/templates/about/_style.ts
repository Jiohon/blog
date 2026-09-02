import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, token, stylish, responsive: r, prefixCls }) => ({
  about: cx(
    `${prefixCls}-about-container`,
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

  hero: cx(
    `${prefixCls}-about-hero`,
    css`
      display: grid;
      gap: 1.25rem;
      padding-block: clamp(1rem, 3vw, 2.5rem) 2rem;
    `
  ),
  eyebrow: cx(
    `${prefixCls}-about-eyebrow`,
    css`
      color: ${token.colorPrimary};
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
    `
  ),
  heroContent: cx(
    `${prefixCls}-about-heroContent`,
    css`
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 2rem;

      ${r({
        mobile: css`
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;
        `,
      })}
    `
  ),
  heroTitle: cx(
    `${prefixCls}-about-heroTitle`,
    css`
      margin: 0;
      color: ${token.colorText};
      font-family: Rubik Glitch;
      font-size: clamp(2rem, 4vw, 2.6rem);
      font-weight: normal;
      letter-spacing: 0.3rem;
      line-height: 1.2;

      span {
        color: ${token.colorPrimary};
      }
    `
  ),
  heroDescription: cx(
    `${prefixCls}-about-heroDescription`,
    css`
      max-width: 18rem;
      margin: 0 0 0.25rem;
      color: ${token.colorTextSecondary};
      font-size: 1rem;
      letter-spacing: 0.01em;
      line-height: 1.65;
    `
  ),
  heroMeta: cx(
    `${prefixCls}-about-heroMeta`,
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
}))
