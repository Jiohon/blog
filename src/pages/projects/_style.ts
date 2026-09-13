import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, stylish, responsive: r, prefixCls, token }) => ({
  projects: cx(
    `${prefixCls}-projects-container`,
    css`
      ${stylish.container}

      gap: 2rem;
    `
  ),
  hero: cx(
    `${prefixCls}-projects-hero`,
    css`
      display: grid;
      gap: 1.25rem;
      padding-block: clamp(1rem, 3vw, 2.5rem) 0;
    `
  ),
  eyebrow: cx(
    `${prefixCls}-projects-eyebrow`,
    css`
      color: ${token.colorPrimary};
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
    `
  ),
  heroContent: cx(
    `${prefixCls}-projects-heroContent`,
    css`
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 2rem;

      @media (max-width: 576px) {
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
      }
    `
  ),
  heroTitle: cx(
    `${prefixCls}-projects-heroTitle`,
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
    `${prefixCls}-projects-heroDescription`,
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
    `${prefixCls}-projects-heroMeta`,
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
  wrapper: cx(
    `${prefixCls}-projects-wrapper`,
    css`
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.25rem;

      ${r({
        tablet: css`
          grid-template-columns: repeat(2, minmax(0, 1fr));
        `,
        mobile: css`
          grid-template-columns: 1fr;
        `,
      })}
    `
  ),
  projectCard: cx(
    `${prefixCls}-project-card`,
    css`
      min-width: 0;

      .${prefixCls}-card {
        height: 100%;
        overflow: hidden;
        border: 1px solid ${token.colorBorderSecondary};
        border-radius: ${token.borderRadiusLG}px;
        background: color-mix(in srgb, ${token.colorBgContainer} 84%, transparent);
        box-shadow: ${token.boxShadowTertiary};
        backdrop-filter: blur(20px) saturate(140%);
        transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease,
          box-shadow 0.3s ease;
      }

      .${prefixCls}-card-body {
        display: flex;
        flex-direction: column;
        min-height: 15rem;
        padding: 1.25rem;
      }

      @media (prefers-reduced-motion: reduce) {
        .${prefixCls}-card {
          transition: border-color 0.2s ease;
        }

        &:hover .${prefixCls}-card, &:active .${prefixCls}-card {
          transform: none;
        }
      }
    `
  ),
  cardHeader: cx(
    `${prefixCls}-project-cardHeader`,
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-block-end: 2rem;
    `
  ),
  projectIndex: cx(
    `${prefixCls}-project-index`,
    css`
      color: ${token.colorTextQuaternary};
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
    `
  ),
  projectLink: cx(
    `${prefixCls}-project-link`,
    css`
      display: inline-grid;
      width: 2.25rem;
      height: 2.25rem;
      place-items: center;
      border: 1px solid ${token.colorBorderSecondary};
      border-radius: 50%;
      color: ${token.colorTextSecondary};
      transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

      &:hover {
        border-color: ${token.colorPrimary};
        background-color: ${token.colorPrimary};
        color: ${token.colorTextLightSolid};
      }
    `
  ),
  projectContent: cx(
    `${prefixCls}-project-content`,
    css`
      align-items: flex-start;
    `
  ),
  projectName: cx(
    `${prefixCls}-project-name`,
    css`
      display: inline-flex;
      align-items: center;
      color: ${token.colorText};
      font-size: clamp(1.4rem, 2vw, 1.7rem);
      font-weight: 700;
      letter-spacing: -0.045em;
      line-height: 1.05;
      text-wrap: balance;
      text-decoration: none;
      text-underline-offset: 0.18em;
      text-decoration-thickness: 0.08em;

      &:hover {
        color: ${token.colorPrimary};
        text-decoration: underline;
      }

      &.site-typography {
        color: ${token.colorText};
      }
    `
  ),
  projectDescription: cx(
    `${prefixCls}-project-description`,
    css`
      max-width: 30rem;
      position: relative;
      padding-inline-start: 0.875rem;
      color: ${token.colorTextDescription};
      font-size: 0.9rem;
      letter-spacing: 0.01em;
      line-height: 1.7;

      &::before {
        position: absolute;
        inset-block: 0.35em;
        inset-inline-start: 0;
        width: 0.2rem;
        border-radius: 999px;
        background: ${token.colorPrimary};
        content: "";
      }
    `
  ),
  projectTags: cx(
    `${prefixCls}-project-tags`,
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-block-start: auto;
      padding-block-start: 1.5rem;

      a {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        min-height: 1.8rem;
        padding-inline: 0.65rem;
        border: 1px solid ${token.colorBorderSecondary};
        border-radius: 999px;
        color: ${token.colorTextDescription};
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

        &:hover {
          border-color: ${token.colorPrimaryBorder};
          background-color: ${token.colorPrimaryBg};
          color: ${token.colorPrimary};
        }
      }
    `
  ),
}))
