import { css, Global, ThemeProvider } from '@emotion/react'
import React from 'react'

interface Props {
  theme: any
  children: React.ReactNode
}

export const GlobalStyles = ({ theme, children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'SF Mono Regular',
            src: "url('../../static/fonts/SFMono-Regular.otf') format('otf')",
          },
        }}
      ></Global>
      <Global
        styles={css`
          ::selection {
            background: rgba(${theme.purple6}, 0.45);
            color: rgb(${theme.gray9});
          }

          ::-webkit-scrollbar {
            background-color: transparent;
            width: 10px;
            height: 10px;
            z-index: 1000;
            padding: 0px;
          }

          body[scroll],
          ::-webkit-scrollbar-thumb {
            background-color: rgba(${theme.gray7}, 0.35);
            border-radius: ${theme.borderRadiusLarge};
            background-clip: content-box;
            border: 2px solid transparent;
            z-index: 10000;
          }

          body[scroll],
          ::-webkit-scrollbar-thumb:hover {
            background-color: rgba(${theme.gray7}, 0.45);
            transition: 0s;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          html {
            font-family: ${theme.fontFamilyBase};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            line-height: 1.6;
            font-size: 13px;
            font-weight: normal;
            font-kerning: normal;
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            padding: 0;
            overflow: overlay;
            position: relative;
            background: ${theme.pageBackground};
            transition: background-color ease-out 0.1s;
          }

          a {
            color: rgb(${theme.purple6});
            text-decoration: none;
            transition: border ease-out 0.1s;
          }

          p,
          ul,
          ol,
          ul,
          table,
          blockquote {
            color: rgb(${theme.gray9});
          }

          p,
          ul,
          ol {
            -webkit-font-smoothing: auto;
            line-height: 1.7;
            margin-top: 0;
            margin-bottom: 1rem;
            letter-spacing: -0.01rem;
          }

          ul {
            padding-left: 1.5rem;
          }

          ul li ul,
          ol li ol {
            margin-top: 0.5rem;
            margin-bottom: 0;
          }

          li {
            line-height: 1.5;
            margin-bottom: 0.5rem;
            padding-left: 0.25rem;
          }

          li::marker {
            font-size: 1.1rem;
            line-height: 1;
            color: rgb(${theme.magenta5});
          }

          /* Blockquote */

          blockquote {
            margin: 1.5rem 0;
            border-left: 4px solid rgba(${theme.purple6}, 0.6);
            margin-left: 0;
            padding: 0.8rem 1rem;
            background: rgba(${theme.purple5}, 0.15);
            border-radius: ${theme.borderRadiusLarge};
            box-shadow: 0 0 4px rgba(${theme.purple6}, 0.1);

            & code.language-text {
              background-color: transparent;
            }
          }

          blockquote p {
            font-size: 1rem;
            line-height: 1.9;
            font-weight: 400;
          }

          blockquote p:last-of-type {
            margin: 0;
          }

          /* Headings */

          h1,
          h2,
          h3,
          h4,
          h5 {
            color: rgb(${theme.gray10});
            line-height: 1.1;
            margin-top: 0;
            margin-bottom: 1.5rem;
            font-weight: 600;
            scroll-margin-top: 100px;
            font-family: ${theme.fontFamilyHeading};
          }

          h1:not(:first-of-type),
          h2:not(:first-of-type),
          h3:not(:first-of-type),
          h4:not(:first-of-type) {
            margin-top: 2.5rem;
          }

          h2 + h3 {
            margin-top: 1.5rem !important;
          }

          h2 {
            font-size: 1.9rem;
            margin: 0 0 1rem;
            font-weight: 700;
            padding-bottom: 0.3rem;
            border-bottom: 1px solid rgb(${theme.gray3});
            color: rgb(${theme.gray10});
            letter-spacing: -0.03rem;
          }

          h2 code {
            font-size: 1.9rem !important;
          }

          h3 {
            font-size: 1.5rem;
            font-weight: 900;
            margin-bottom: 1rem;
            color: rgb(${theme.gray10});
            font-family: ${theme.fontFamilyHeading};
          }

          h3 code {
            font-size: 1.5rem !important;
          }

          h4 {
            color: rgb(${theme.gray10});
            margin-bottom: 1.5rem;
            font-size: 1.3rem;
            font-weight: 800;
            /* text-transform: uppercase; */
            font-family: ${theme.fontFamilyHeading};
          }

          h4 code {
            font-size: 1.3rem !important;
          }

          h5 {
            color: rgb(${theme.gray9});
            margin-bottom: 1rem;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: -0.02rem;
            font-family: ${theme.fontFamilyHeading};
          }

          table {
            border: 1px solid rgb(${theme.gray3});
            display: table;
            border-collapse: separate;
            border-spacing: 0;
            max-width: 100%;
            overflow-x: auto;
            width: 100%;
            line-height: 1.5;
            margin-top: 0;
            margin-bottom: 1.5rem;
          }

          td,
          th {
            hyphens: auto;
            padding: 0.5rem;
            text-align: left;
            word-break: break-word;
            border-bottom: 1px solid rgb(${theme.gray3});
          }

          th {
            background: rgb(${theme.gray3});
            border-bottom: 2px solid rgb(${theme.gray3});
          }

          img {
            display: block;
            max-width: 100%;
          }

          button {
            -webkit-appearance: none;
            display: inline-flex;
            align-items: center;
            padding: 0.6rem 1rem;
            font-family: ${theme.fontFamilyBase};
            line-height: 1;
            border-radius: ${theme.borderRadiusLarge};
            font-size: 0.9rem;
            cursor: pointer;
            font-weight: 500;
            color: rgb(${theme.gray9});
            border: 1px solid rgb(${theme.gray3});
            gap: 0.25rem;

            &:hover {
              color: rgb(${theme.gray10});
              border-color: rgb(${theme.gray4});
            }
          }

          .anchor {
            display: none;
          }

          .tag {
            display: inline-flex;
            position: relative;
            font-size: 0.9rem;
            border-radius: ${theme.borderRadiusSmall};
            padding: 0.2rem 0.6rem;
            margin-bottom: 0.8rem;
            margin-right: 0.3rem;
            align-items: center;
            line-height: calc(0.9rem + 8px);
            background: rgba(${theme.blue5}, 0.15);
            color: rgb(${theme.blue6});
            box-shadow: 0 0 2px rgba(${theme.blue7}, 0.1);

            &.success {
              background: rgba(${theme.green5}, 0.15);
              color: rgb(${theme.green6});
              box-shadow: 0 0 2px rgba(${theme.green7}, 0.1);
            }
            &.warning {
              background: rgba(${theme.gold5}, 0.15);
              color: rgb(${theme.gold6});
              box-shadow: 0 0 2px rgba(${theme.gold7}, 0.1);
            }
            &.error {
              background: rgba(${theme.red5}, 0.15);
              color: rgb(${theme.red6});
              box-shadow: 0 0 2px rgba(${theme.red7}, 0.1);
            }
          }

          .gatsby-highlight {
            background: ${theme.cardBackground};
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
            border-radius: ${theme.borderRadiusMedium};
            overflow: overlay;
            margin: 0.6rem 0 2rem 0;
            padding: 1rem;
            max-width: 100%;
            position: relative;
            transform: matrix(1, 0, 0, 1, 0, 0);
            box-shadow: ${theme.cardShadow};
            transition: background-color ease-out 0.1s;

            &::before {
              content: attr(data-language);
              position: absolute;
              right: 1rem;
              top: 0;
              color: rgb(${theme.gray6});
              font-weight: bold;
              text-transform: capitalize;
              font-size: 12px;
              line-height: 2.4rem;
              transform: scale(0.85);
              transform-origin: 100% 10%;
            }

            &::after {
              content: '';
              position: absolute;
              left: 1.1rem;
              top: 0.8rem;
              width: 11px;
              height: 11px;
              border-radius: 50%;
              background-color: #ec6a5e;
            }

            & > pre[class*='language-'] {
              &::before {
                content: '';
                position: absolute;
                left: 2.5rem;
                top: 0.8rem;
                width: 11px;
                height: 11px;
                border-radius: 50%;
                background-color: #f4be4f;
              }
              &::after {
                content: '';
                position: absolute;
                left: 3.9rem;
                top: 0.8rem;
                width: 11px;
                height: 11px;
                border-radius: 50%;
                background-color: #62c454;
              }
            }
          }

          code[class*='language-'],
          pre[class*='language-'] {
            -webkit-font-smoothing: subpixel-antialiased;
            color: ${theme.codeFontColor};
            font-family: 'Menlo', ${theme.fontFamilyMonospace};
            font-size: 0.9rem;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.8;
            -moz-tab-size: 2;
            -o-tab-size: 2;
            tab-size: 2;
            margin: 1.5rem 0 0 0;
            padding: 0;
            overflow: overlay;
            width: 100%;

            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
          }

          code.language-shell::before {
            content: '$ ';
            color: ${theme.comment};
          }

          pre.language-text {
            background: transparent;
            -webkit-font-smoothing: subpixel-antialiased;
            margin-left: 0;
            padding-left: 0;
            padding-bottom: 0;
            border: none;
            box-shadow: none;
          }

          code.language-text {
            color: #646cff;
            transition: background-color ease-out 0.1s;
            background-color: rgba(${theme.gray3}, 0.95);
            padding: 0.2rem 0.35rem;
            border-radius: ${theme.borderRadiusSmall};
          }

          .gatsby-highlight[data-language='text'] {
            background: transparent;
            padding: 0;
          }

          .gatsby-highlight-code-line {
            background-color: rgb(116, 207, 116, 0.15);
            display: block;
            margin-left: -1rem;
            margin-right: -1rem;
            padding-left: calc(1rem - 4px);
            border-left: 4px solid #74cf74;
          }

          /* Colors */

          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata,
          .token.important {
            color: ${theme.comment};
          }

          .token.punctuation {
            color: ${theme.punctuation};
          }

          .token.namespace {
            opacity: 0.7;
          }

          .token.property {
            color: ${theme.property};
          }

          .token.tag,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: ${theme.tag};
          }

          .token.number {
            color: ${theme.number};
          }

          .token.char,
          .token.builtin,
          .token.url,
          .token.inserted {
            color: ${theme.codeFontColor};
          }

          .token.attr-name,
          .token.selector {
            color: ${theme.attribute};
          }

          .token.attr-value,
          .token.string {
            color: ${theme.string};
          }

          .token.operator {
            color: ${theme.operator};
          }

          .token.atrule,
          .token.keyword {
            font-weight: 600;
            color: ${theme.keyword};
          }

          .token.function {
            color: ${theme.function};
          }

          .language-css,
          .token.boolean,
          .token.class-name {
            color: ${theme.class};
          }

          .token.regex {
            color: ${theme.keyword};
          }

          .token.variable {
            color: ${theme.variable};
          }

          .token.bold {
            font-weight: bold;
          }
          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }

          .language-jsx .token.class-name {
            color: ${theme.tag};
          }

          pre::-moz-selection,
          pre::-moz-selection,
          code::-moz-selection,
          code::-moz-selection {
            text-shadow: none;
            color: inherit;
            background: rgba(150, 150, 150, 0.3) !important;
          }

          pre::selection,
          pre::selection,
          code::selection,
          code::selection {
            text-shadow: none;
            color: inherit;
            background: rgba(150, 150, 150, 0.3) !important;
          }

          pre[class*='language-']::-moz-selection,
          pre[class*='language-']::-moz-selection,
          code[class*='language-'] ::-moz-selection,
          code[class*='language-'] ::-moz-selection {
            text-shadow: none;
            color: inherit;
            background: rgba(150, 150, 150, 0.3) !important;
          }

          pre[class*='language-']::selection,
          pre[class*='language-']::selection,
          code[class*='language-'] ::selection,
          code[class*='language-'] ::selection {
            text-shadow: none;
            color: inherit;
            background: rgba(150, 150, 150, 0.3) !important;
          }
        `}
      />

      {children}
    </ThemeProvider>
  )
}
