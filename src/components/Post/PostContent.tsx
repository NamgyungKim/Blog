import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { text } from '../../styles/theme'

interface PostContentProps {
  html: string
}

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  const [content, setContent] = useState('')

  // heading id setting
  useEffect(() => {
    const $div = document.createElement('div')
    $div.innerHTML = html
    const headingTag = $div.querySelectorAll('h1,h2,h3,h4,h5,h6')
    const itemsArray = Array.from(headingTag)
    itemsArray.forEach(heading => {
      const idValue = heading.innerHTML
      heading.id = idValue
    })
    setContent($div.innerHTML)
  }, [])

  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: content }} />
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  word-break: break-all;
  margin-bottom: 100px;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: bold;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
    margin-left: 2px;
    letter-spacing: 0.02em;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    margin-top: 1.4em;
    margin-bottom: 1px;
    padding: 3px 3px;
    background-color: rgb(231, 243, 248);
    font-size: 25px;
    line-height: 1.2;
  }

  h3 {
    font-size: 20px;
    margin-top: 1em;
    margin-bottom: 1px;
  }

  // Adjust Quotation Element Style
  blockquote {
    padding: 0 15px;
    border-left: 3px solid #000000;
  }

  // Adjust List Element Style
  ol {
    margin-left: 24px;
    list-style: auto;
  }

  ul {
    margin-left: 24px;
    list-style: disc;
  }

  li {
    padding: 3px 0;
    line-height: 150%;
    p {
      padding: 0 0 0 3px;
    }
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    opacity: 0.7;
    color: #37352f;
    font-weight: lighter;
    text-decoration: underline;
    text-decoration-color: rgba(55, 53, 47, 0.4);
  }

  // Adjust Code Style
  pre[class*='language-'],
  code[class*='language-'] {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;
    text-shadow: none;
    tab-size: 10;
  }

  img {
    max-width: 100%;
  }

  pre.language-html {
    font-size: 13px;
    padding: 30px;
  }
  code[class*='language-'].language-text {
    font-weight: lighter;
    padding: 2px 5px;
    color: #eb5757;
    ${text.$body2}
    font-weight: normal;
  }

  aside {
    display: flex;
    border: 1px solid rgba(55, 53, 47, 0.16);
    padding: 16px 18px;
    border-radius: 5px;
    margin: 4px 0;
    .icon {
      margin-right: 10px;
    }
  }

  strong {
    font-weight: bold;
  }
`

export default PostContent
