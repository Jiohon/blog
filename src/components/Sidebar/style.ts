import { createStyles } from "antd-style"

const Cardinality = 5
const Interval = 5

export const useStyles = createStyles(
  ({ css, cx, token, stylish, prefixCls, isDarkMode }, level: number) => {
    const anchorLevel = Array.from({ length: level }).map((_, i) => {
      const currentLevel = level - i

      const width = level === 1 ? 15 : Cardinality + Interval * (i + 1)

      return css`
        .level-${currentLevel} {
          > .${prefixCls}-anchor-link-title {
            overflow: visible;
            position: relative;
            transition: color 0.45s;

            &::before {
              content: "";
              position: absolute;
              left: -${(currentLevel - 1) * 6}px;
              top: calc(50% - 1px);
              display: inline-block;
              width: ${width}px;
              height: 4px;
              border-radius: 2rem;
              background-color: ${isDarkMode ? "#373737" : "#e5e5e5"};
              margin-inline: -2rem 0;
            }
          }
        }
      `
    })

    return {
      card: css`
        ${stylish.card}
        background-color: transparent;
        box-shadow: none;
        border: none;
      `,

      title: cx(
        `.${prefixCls}-sidebar-title`,
        css`
          color: ${token.colorText};
          font-size: 0.9rem;
          border: none;
          margin-block-end: 1rem !important;
          text-transform: uppercase;
          font-weight: 700;
        `
      ),

      anchorScroll: cx(
        `.${prefixCls}-sidebar-anchor-scroll`,
        css`
          min-height: 20rem;
          max-height: calc(100vh - 45rem - ${token.headerHeight}px);
          overflow-y: auto;
          scroll-behavior: smooth;
        `
      ),

      anchor: cx(
        `.${prefixCls}-sidebar-anchor`,
        css`
          .${prefixCls}-anchor {
            position: relative;
            font-size: 0.9rem;
            font-family: SF Mono Medium;
            padding-inline: 2rem 0;

            ${anchorLevel}

            &-ink {
              display: none !important;
            }

            &::before {
              border-inline-start: 0px !important;
            }

            &:hover {
              .${prefixCls}-anchor-link-title {
                color: ${token.colorTextTertiary};
              }
            }

            .${prefixCls}-anchor-link {
              padding-block: 0px !important;
              padding-inline: 6px 0;
            }

            .${prefixCls}-anchor-link:has(.${prefixCls}-anchor-link-active),
            .${prefixCls}-anchor-link-active {
              > .${prefixCls}-anchor-link-title {
                color: ${token.colorText};

                &::before {
                  content: "";
                  background-color: ${token.colorTextTertiary};
                  transform: scale(1.08);
                }
              }
            }

            .${prefixCls}-anchor-link-title {
              overflow: visible;
              color: ${token.colorTextTertiary};
              letter-spacing: 0.5px;
              padding-block: 5px;
              margin-block: 0px;
              color: transparent;

              &:hover {
                color: ${token.colorTextSecondary};

                &::before {
                  transform: scale(1.1);
                  background-color: ${token.colorTextTertiary};
                }
              }
            }
          }
        `
      ),

      tag: cx(
        `${prefixCls}-sidebar-tag`,
        css`
          &.${prefixCls}-menuBar-tag.${prefixCls}-tag {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            min-height: 1.9rem;
            margin-block: 0.3rem;
            margin-inline-end: 0.35rem;
            padding-block: 0.1rem;
            padding-inline: 0.6rem 0.35rem;
            border: 1px solid ${token.colorBorderSecondary};
            background: color-mix(in srgb, ${token.colorBgContainer} 78%, transparent);
            color: ${token.colorTextSecondary};
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.01em;
            line-height: 1.5;
            transition: transform 0.2s ease, color 0.2s ease, background-color 0.2s ease,
              border-color 0.2s ease;

            &:hover {
              border-color: ${token.colorPrimaryBorder};
              background: ${token.colorPrimaryBg};
              color: ${token.colorPrimary};
              transform: translateY(-1px);
            }

            &:focus-visible {
              outline: 2px solid ${token.colorPrimaryBorder};
              outline-offset: 2px;
            }

            &.${prefixCls}-tag-checked {
              border-color: ${token.colorPrimaryBorder};
              background: ${token.colorPrimaryBg};
              color: ${token.colorPrimary};
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

      tagCount: cx(
        `${prefixCls}-sidebar-tagCount`,
        css`
          display: inline-grid;
          min-width: 1.15rem;
          height: 1.15rem;
          place-items: center;
          border-radius: 999px;
          background: ${token.colorFillSecondary};
          color: ${token.colorTextQuaternary};
          font-family: ${token.fontFamilyCode};
          font-size: 0.65rem;
          font-weight: 600;
          line-height: 1;
        `
      ),

      latest: cx(
        `.${prefixCls}-sidebar-latest`,
        css`
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          gap: 1rem;
          color: ${token.colorText};
          margin-block: 0 0.6rem;
          margin-inline: 0.3rem 0;

          .title {
            font-size: 0.9rem;
          }

          & {
            .active {
              color: ${token.colorPrimaryHover};
              font-weight: bold;
            }

            &:hover {
              color: ${token.colorPrimaryHover};
              text-decoration: none;
            }

            &:last-child {
              margin-block-end: 0;
            }
          }
        `
      ),
    }
  }
)
