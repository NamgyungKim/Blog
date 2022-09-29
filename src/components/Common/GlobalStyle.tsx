import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'
import '../../styles/reset.css'
import { color } from '../../styles/theme'

const defaultStyle = css`
  // NotoSansKR
  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url('../font/NotoSansKR-Regular.otf');
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url('../font/NotoSansKR-bold.otf');
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: lighter;
    font-display: swap;
    src: url('../font/NotoSansKR-Light.otf');
  }
  // Roboto
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url('../font/Roboto-Bold.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url('../font/Roboto-Regular.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: lighter;
    font-display: swap;
    src: url('../font/Roboto-Light.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: normal;
    font-display: swap;
    src: url('../font/Roboto-Light.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: lighter;
    font-display: swap;
    src: url('../font/Roboto-LightItalic.ttf');
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    word-spacing: 0.1em;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
    color: ${color.$text};
    font-family: 'NotoSansKR', 'Roboto', serif;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
