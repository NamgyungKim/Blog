import styled from '@emotion/styled'
import React, {FunctionComponent, useRef} from 'react'
import {color, text} from '../../styles/theme'
import {BiSearch} from 'react-icons/bi'

type SearchBarProps = {
    search: (keyWord: string) => void
}

const SearchBar: FunctionComponent<SearchBarProps> = ({search}) => {
    const input = useRef<HTMLInputElement>(null)

    const keyEnter = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.code !== 'Enter') return
        submitKeyWord()
    }

    const submitKeyWord = () => {
        if (typeof input.current?.value !== 'string') return
        search(input.current?.value)
    }

    return (
        <SearchBox>
            <Input
                ref={input}
                onKeyUp={keyEnter}
                type="text"
                placeholder="검색어를 입력해 주세요"
            />
            <SearchButton type='button' onClick={() => submitKeyWord()}>
                <BiSearch size={24} color={color.$gray500}/>
            </SearchButton>
        </SearchBox>
    )
}

const SearchBox = styled.div`
  display: flex;
  height: 40px;
  border: 1px solid ${color.$gray300};
  border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 30px;
`

const Input = styled.input`
  width: 100%;
  padding: 8px 0px 8px 15px;
  border: none;
  outline: none;
  ${text.$body1}
`

const SearchButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 8px 15px 8px 8px;
  cursor: pointer;
`

export default SearchBar
