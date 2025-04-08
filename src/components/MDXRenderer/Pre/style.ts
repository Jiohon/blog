import { createStyles } from "antd-style"

export const useStyles = createStyles(
  ({ css, cx, token, stylish, prefixCls }, componentPrefixCls: string) => {
    return {
      Pre: cx(
        `${prefixCls}-${componentPrefixCls}`,
        css`
          ${stylish.card}
          position: relative;
          display: grid;
          gap: 0.15rem;
          border-radius: ${token.borderRadius * 1.3}px;
          margin-block: 3rem 2rem;
          padding-block-end: 0.65rem;
          border: 1px solid ${token.colorBorderSecondary};
          overflow: overlay;
          font-family: ${token.fontFamilyCode};
        `
      ),

      // title
      TitleBox: cx(
        `${prefixCls}-${componentPrefixCls}-titleBox`,
        css`
          position: sticky;
          top: 0;
          display: flex;
          justify-content: space-between;
          font-family: ${token.fontFamilyCode};
          color: ${token.colorTextQuaternary};
          font-size: 0.95rem;
          padding-inline: 1.3rem;
          padding-block-start: 0.6rem;
          gap: 0.8rem;
          backdrop-filter: blur(6px);
          z-index: 10;
        `
      ),

      titleStyle: cx(
        `${prefixCls}-${componentPrefixCls}-titleBox-title`,
        css`
          color: inherit;
          font-family: inherit;
        `
      ),

      language: cx(
        `${prefixCls}-${componentPrefixCls}-titleBox-language`,
        css`
          display: flex;
          align-items: center;
          font-family: inherit;
          font-size: 0.9rem;
          color: inherit;
        `
      ),

      stackblitz: cx(
        `${prefixCls}-${componentPrefixCls}-titleBox-stackblitz`,
        css`
          display: flex;
          align-items: center;
          margin-inline-end: 0.3rem;
          opacity: 0.8;

          &.${prefixCls}-btn {
            color: inherit;
          }
        `
      ),

      codeSandbox: cx(
        `${prefixCls}-${componentPrefixCls}-titleBox-codeSandbox`,
        css`
          display: flex;
          align-items: center;
          margin-inline-end: 0.3rem;
          opacity: 0.8;

          &.${prefixCls}-btn {
            color: inherit;
          }
        `
      ),

      copy: cx(
        `${prefixCls}-${componentPrefixCls}-copy`,
        css`
          position: absolute;
          top: 2rem;
          right: 1.2rem;
          z-index: 10;
          height: 32px;
          padding-block: 5px;
          padding-inline: 7px;
          box-shadow: ${token.boxShadowFourth};
          z-index: 1000;
          border-color: ${token.colorPrimaryBorder};
        `
      ),
    }
  }
)
