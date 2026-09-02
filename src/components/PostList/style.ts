import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, responsive: r, token, prefixCls }) => ({
  post: cx(
    `${prefixCls}-post`,
    css`
      position: relative;
      margin-block-end: 2rem;

      &::before {
        position: absolute;
        inset-block: 3.25rem 0;
        inset-inline-start: 0.35rem;
        width: 1px;
        background: ${token.colorBorderSecondary};
        content: "";
      }

      &:last-child {
        margin-block-end: 0;
      }

      ${r({
        mobile: css`
          padding-inline-start: 1rem;

          &::before {
            inset-inline-start: 0.2rem;
          }
        `,
      })}
    `
  ),
  year: cx(
    `${prefixCls}-post-year`,
    css`
      position: relative;
      z-index: 1;
      width: fit-content;
      margin-block-end: 1rem;
    `
  ),
  content: cx(
    `${prefixCls}-post-year-content`,
    css`
      position: relative;
      z-index: 1;
      width: 100%;
      padding-inline-start: 1.5rem;
    `
  ),
  link: cx(
    `${prefixCls}-post-link`,
    css`
      display: grid;
      grid-template-columns: 2.75rem minmax(0, 1fr) auto;
      align-items: center;
      gap: 1rem;
      min-height: 4rem;
      margin: 0;
      padding-inline: 0.875rem;
      padding-block: 0.875rem;
      border-block-end: 1px solid ${token.colorBorderSecondary};
      color: inherit;
      transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.25s ease,
        color 0.25s ease;

      svg {
        width: 2.5rem;
        height: 2.5rem;
      }

      &:hover,
      &:focus-visible {
        background-color: ${token.colorPrimaryBg};
        transform: translateX(0.15rem);

        h5 {
          color: ${token.colorPrimary};
        }
      }

      &:active {
        transform: scale(0.99);
      }

      .infos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-width: 0;
      }

      h5 {
        overflow: hidden;
        margin: 0;
        color: ${token.colorText};
        font-size: 1rem;
        font-weight: 650;
        letter-spacing: -0.01em;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      time {
        flex: none;
        color: ${token.colorTextDescription};
        font-family: ${token.fontFamilyCode};
        font-size: 0.75rem;
        font-weight: 500;
        white-space: nowrap;
      }

      ${r({
        mobile: css`
          grid-template-columns: 2.25rem minmax(0, 1fr);
          gap: 0.75rem;
          min-height: 4.5rem;

          svg {
            width: 2.25rem;
            height: 2.25rem;
          }

          .infos {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.25rem;
          }

          h5 {
            font-size: 0.9rem;
          }
        `,
      })}

      @media (prefers-reduced-motion: reduce) {
        transition: border-color 0.2s ease, background-color 0.2s ease;

        &:hover,
        &:focus-visible,
        &:active {
          transform: none;
        }
      }
    `
  ),
}))
