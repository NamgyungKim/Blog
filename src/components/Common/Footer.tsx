import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { BsGithub } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { color, text } from '../../styles/theme'

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2022 Nadia’s Blog · Made with Gatsby
      <LinkIcon>
        <a href="https://github.com/NamgyungKim" target="_blank">
          <BsGithub size={30} color={color.$gray500} />
        </a>
        <a href="mailto:namgyung.kim@gmail.com" target="_blank">
          <FiMail size={30} color={color.$gray500} />
        </a>
        <a href="https://github.com/NamgyungKim/Blog" target="_blank">
          <RiCodeSSlashFill size={30} color={color.$gray500} />
        </a>
      </LinkIcon>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 50px;
  ${text.$body1}
  color: ${color.$gray500};
  text-align: center;
  cursor: default;
`
const LinkIcon = styled.div`
  margin-top: 20px;
  a {
    margin: 0 4px;
  }
`
