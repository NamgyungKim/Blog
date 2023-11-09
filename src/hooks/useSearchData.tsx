import React, { useEffect, useMemo } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
  page: number
  setPage: (page: number) => void
  postList: PostListItemType[]
}

const useSearchData = function (
  selectedCategory: string,
  searchWorld: string,
  posts: PostListItemType[],
  size: number,
): useInfiniteScrollType {
  const [currenPage, setCurrentPage] = React.useState(1)
  const [count, setCount] = React.useState(1)

  const postListByCategory = useMemo<PostListItemType[]>(() => {
    const data = posts
      .filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      )
      .filter(
        ({
          node: {
            frontmatter: { categories, summary, title },
          },
        }: PostListItemType) => {
          if (searchWorld.trim()) {
            const string = categories.join(',') + summary + title
            const reg = new RegExp(searchWorld, 'gi')
            return string.search(reg) !== -1
          }
          return true
        },
      )
    return data
  }, [selectedCategory, searchWorld])

  useEffect(() => {
    setCount(size * currenPage)
  }, [currenPage])

  return {
    page: currenPage,
    setPage: setCurrentPage,
    postList: postListByCategory.slice(count - size, count),
  }
}

export default useSearchData
