import { createGlobalStyle } from "antd-style"

export const GlobalScopeStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Mono';
    src: url('/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
    url('/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'SF Mono Medium';
    src: url('/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
    url('/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Coalhandluketrial';
    src: url('/fonts/Coalhandluketrial/Coalhandluketrial.woff2') format('woff2'),
    url('/fonts/Coalhandluketrial/Coalhandluketrial.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Grechen Fuemen';
    src: url('/fonts/GrechenFuemen/GrechenFuemen-Regular.woff2') format('woff2'),
    url('/fonts/GrechenFuemen/GrechenFuemen-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Moon Dance';
    src: url('/fonts/MoonDance/MoonDance-Regular.woff2') format('woff2'),
    url('/fonts/MoonDance/MoonDance-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Rubik Glitch';
    src: url('/fonts/RubikGlitch/RubikGlitch-Regular.woff2') format('woff2'),
    url('/fonts/RubikGlitch/RubikGlitch-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    background: rgba(125,138,255,.26);
  }

  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  html {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: ${(p) => p.theme.fontFamily};
    font-size: ${(p) => p.theme.fontSize}px;
    font-weight: normal;
    font-kerning: normal;
    background-color: ${(p) => p.theme.colorBgLayout};
  }

  body {
    position: relative;
    overflow: overlay;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
  }
`
