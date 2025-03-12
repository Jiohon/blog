import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, token, responsive: r }) => ({
  sticky: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    gap: 3rem;
    position: sticky;
    top: calc(${token.headerHeight}px + 20px);
    padding-block: 2rem 0;

    ${r({
      mobile: css`
        top: ${token.headerHeightMobile};
      `,
    })}
  `,
}))
