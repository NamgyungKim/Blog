import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'
import Archive from './Archive'

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
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
