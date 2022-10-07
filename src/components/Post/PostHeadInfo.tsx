import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { color, text } from '../../styles/theme'
import BackButton from 'components/Common/BackButton'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  return (
    <PostHeadInfoWrapper>
      <BackButton />
      <PostData>
        <div>{categories[0] + ' > ' + date}</div>
      </PostData>
      <Title>{title}</Title>
    </PostHeadInfoWrapper>
  )
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 28px 0;
`

const Title = styled.h1`
  ${text.$headline1}
`

const PostData = styled.div`
  color: ${color.$gray500};
  ${text.$body2}
`

export default PostHeadInfo
