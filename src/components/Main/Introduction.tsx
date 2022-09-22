import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { text } from '../../styles/theme'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = () => {
  return (
    <Background>
      <Title>Nadia’s Blog</Title>
      <SubTitle>Nadia의기술블로그 입니다 🎉</SubTitle>
    </Background>
  )
}

const Background = styled.div`
  width: 100%;
  margin-top: 21px;
  margin-bottom: 88px;
`
const Title = styled.div`
  margin-bottom: 10px;
  ${text.$headline1}
`

const SubTitle = styled.div`
  ${text.$body2}
`

export default Introduction
