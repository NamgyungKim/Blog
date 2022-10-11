import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  image?: string
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <html lang="ko" />

        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />

        <meta
          name="google-site-verification"
          content="YjPsphPLmcODNInXoBpf71o5ngdHNIhM1G3VDy5aUF0"
        />
        <meta
          name="naver-site-verification"
          content="2f3671b25c67822f53f28622d22c2f8f279d41b1"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&family=Roboto:ital,wght@0,300;0,400;0,900;1,300;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="favicon" href="./favicon.ico" />
      </Helmet>

      <GlobalStyle />
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export default Template
