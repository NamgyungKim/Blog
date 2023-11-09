import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { PostListItemType } from 'types/PostItem.types'
import Archive from './Archive'

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = function ({
  posts,
}) {

  return (
    <PostListWrapper  >
      {posts.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <Archive {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}

const PostListWrapper = styled.div`
  width: 100%;
`
export default PostList
