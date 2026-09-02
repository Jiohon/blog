import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, stylish, responsive: r, prefixCls, token }) => ({
  archive: cx(
    `${prefixCls}-archive-container`,
    css`
      ${stylish.container}

      display: grid;
      grid-template-columns: auto 260px;
      gap: 4rem;

      ${r({
        tablet: css`
          display: block;
        `,
      })}
    `
  ),
  hero: cx(
    `${prefixCls}-archive-hero`,
    css`
      display: grid;
      gap: 1.25rem;
      padding-block: clamp(1rem, 3vw, 2.5rem) 2rem;
    `
  ),
  eyebrow: cx(
    `${prefixCls}-archive-eyebrow`,
    css`
      color: ${token.colorPrimary};
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
    `
  ),
  heroContent: cx(
    `${prefixCls}-archive-heroContent`,
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
    `${prefixCls}-archive-heroTitle`,
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
    `${prefixCls}-archive-heroDescription`,
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
    `${prefixCls}-archive-heroMeta`,
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
