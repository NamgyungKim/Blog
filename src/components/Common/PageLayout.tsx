import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import { color, text } from '../../styles/theme'
import Footer from './Footer'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrap>
      <Nav>
        <Link to="/">/Home</Link>
        <Link to="/about">/About</Link>
      </Nav>
      <div>{children}</div>
      <Footer />
    </Wrap>
  )
}
const Wrap = styled.div`
  max-width: 800px;
  margin: 50px auto;
`

const Nav = styled.nav`
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
