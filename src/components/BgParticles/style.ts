import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css }) => ({
  animation: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  `,
}))
