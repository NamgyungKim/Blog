import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'
import '../../styles/reset.css'
import { color } from '../../styles/theme'

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}
const defaultStyle = css`
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
    font-family: 'Noto Sans KR', 'Roboto', serif;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

export default GlobalStyle
