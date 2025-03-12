import { createStyles } from "antd-style"

export const useStyles = createStyles(({ css, cx, token, prefixCls }) => {
  const menuBarItem = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 1.6rem;
    text-decoration: none;
    border-radius: ${token.borderRadius};
    color: ${token.colorTextSecondary};
    font-size: 0.85rem;
    font-weight: 500;
    margin-block-end: 0.7rem;

    .inkVisible {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      margin-inline-start: 0.45rem;
      margin-inline-end: 0.85rem;
      background-color: ${token.colorPrimaryHover};
      opacity: 0.8;
    }
  `
  const hover = css`
    &:hover {
      color: ${token.colorPrimary};
      text-decoration: none;
    }
  `

  return {
    menuBar: cx(
      `${prefixCls}-menuBar`,
      css`
        div:last-child {
          margin-block-end: 0rem;
        }
      `
    ),

    item: cx(menuBarItem),

    hover: cx(hover),

    title: cx(
      `${prefixCls}-menuBar-title`,
      css`
        color: ${token.colorText};
        font-size: 1rem;
        font-weight: 700;
        margin-block-start: 0.6rem;
        margin-block-end: 0.8rem;

        &:first-child {
          margin-block-start: 0;
        }
      `
    ),

    text: cx(
      `${prefixCls}-menuBar-text`,
      css`
        ${menuBarItem}
      `
    ),

    link: cx(
      `${prefixCls}-menuBar-link`,
      css`
        ${menuBarItem}
        ${hover}

        .link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: inherit;
          width: 100%;

          &.active {
            color: ${token.colorPrimary} !important;
          }
        }
      `
    ),

    tag: cx(
      `${prefixCls}-menuBar-tag`,
      css`
        &.${prefixCls}-tag {
          box-sizing: border-box;
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 500;
          height: auto;
          line-height: 20px;
          color: ${token.colorTextSecondary};
          background-color: ${token.colorFillDefaultBg};
          text-transform: capitalize;
          margin-block-start: 0.7rem;
          margin-inline-end: 0.6rem;
          padding-block: 0.2rem;
          padding-inline: 8px;
          border-radius: ${token.borderRadius}px;

          &:hover {
            color: ${token.colorPrimaryHover};
            background-color: ${token.colorPrimaryBg};
          }

          &:active {
            color: ${token.colorPrimaryActive};
          }

          &.${prefixCls}-tag-checked {
            color: ${token.colorPrimary};
            background-color: ${token.colorPrimaryBg};
          }
        }
      `
    ),
  }
})
