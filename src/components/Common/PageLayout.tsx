import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import { color, media, text } from '../../styles/theme'
import Footer from './Footer'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrap>
      <div>
        <Nav>
          <Link to="/">/Home</Link>
          <Link to="/about">/About</Link>
        </Nav>
        {children}
      </div>
      <Footer />
    </Wrap>
  )
}
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 800px;
  min-height: 100vh;
  margin: auto;
  ${media.laptop} {
    max-width: 800px;
    width: 100%;
    padding: 0 20px;
  }
`

const Nav = styled.nav`
  margin-top: 50px;
  a:first-of-type {
    margin-left: 0;
  }
  a {
    margin-left: 10px;
    color: ${color.$gray500};
    ${text.$body1}
    text-decoration: none;
    padding: 5px;
    :hover {
      color: ${color.$black};
    }
  }
`

export default PageLayout
