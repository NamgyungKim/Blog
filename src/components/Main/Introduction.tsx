import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { text } from '../../styles/theme'

const Introduction: FunctionComponent = () => {
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
