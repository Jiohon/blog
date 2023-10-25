import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, stylish, cx, responsive: r, token, prefixCls }) => ({
  container: css`
    ${stylish.container}
  `,

  brief: css`
    display: flex;
  `,

  briefDescription: css`
    -webkit-font-smoothing: antialiased;
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.4;
    color: ${token.colorTextSecondary};

    ${r({
      tablet: css`
        font-size: 0.9rem;
        margin-top: 2rem;
      `,
    })}
  `,

  previewWrapper: css`
    ${stylish.wrapper}
    margin-top: 2rem;
  `,

  preview: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;

    ${r({
      tablet: css`
        grid-template-columns: repeat(2, 1fr);
        gap: 1.9rem;
      `,
    })}

    ${r({
      mobile: css`
        grid-template-columns: repeat(1, 1fr);
        gap: 1.4rem;
      `,
    })}
  `,

  recentCard: css`
    min-height: 9rem;
    background-color: ${token.colorBgElevated};

    .${prefixCls}-card-body {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
    }
  `,

  highlightCard: css`
    min-height: 9rem;
    background-color: ${token.colorBgElevated};

    .${prefixCls}-card-body {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      height: 100%;
      margin-left: 1rem;
    }
  `,

  time: css`
    display: block;
    font-family: monospace;
    color: ${token.colorMagentaBorderHover};
    font-size: 0.75rem;

    ${r({
      tablet: css`
        font-size: 0.7rem;
      `,
    })}
  `,

  titleLink: css`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.95rem;
    line-height: 1.2;
    color: ${token.colorText};
    font-weight: 600;
    padding: 0;
    border: 0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: ${token.colorText};
    }

    ${r({
      tablet: css`
        font-size: 0.85rem;
      `,
    })}
  `,

  tagLinks: css`
    display: flex;
    align-items: flex-end;

    a {
      font-size: 0.75rem;
      color: ${token.colorTextDescription};
      &:hover {
        text-decoration: underline;
        color: ${token.colorText};
      }

      ${r({
        tablet: css`
          font-size: 0.7rem;
        `,
      })}
    }
  `,
}))
