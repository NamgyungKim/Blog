import styled from '@emotion/styled'
import React from 'react'
import { HiChevronDoubleLeft } from 'react-icons/hi'

const BackButton = () => {
  const goBackPage = () => window.history.back()
  return (
    <Button onClick={goBackPage}>
      <HiChevronDoubleLeft size={18} />
      <span>Back</span>
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 28px 0;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s;
  :hover {
    transform: translateX(-3px);
  }
  span {
    margin-left: 3px;
    margin-bottom: -1px;
  }
`

export default BackButton
