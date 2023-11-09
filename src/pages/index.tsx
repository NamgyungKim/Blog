import React, { FunctionComponent, useMemo } from 'react'
import Introduction from 'components/Main/Introduction'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import queryString, { ParsedQuery } from 'query-string'
import Template from 'components/Common/Template'
import TabMenu, { CategoryListProps } from 'components/Main/TabMenu'
import PageLayout from 'components/Common/PageLayout'
import SearchBar from 'components/Main/SearchBar'
import useSearchData from 'hooks/useSearchData'
import Pagenation from 'components/Common/Pagenation'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const SIZE = 10

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
  },
}) {
  const [searchWorld, setSearchWorld] = React.useState('')
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category
  const { page, setPage, postList } = useSearchData(
    selectedCategory,
    searchWorld,
    edges,
    SIZE,
  )

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories?.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )

  const onSearch = (world: string) => {
    setSearchWorld(world)
  }

  return (
    <Template title={title} description={description} url={siteUrl}>
      <PageLayout>
        <Introduction />
        <SearchBar search={onSearch} />
        <TabMenu
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        <PostList posts={postList} />
        <Pagenation
          page={page}
          totalPage={edges.length / SIZE + 1}
          onChange={setPage}
        />
      </PageLayout>
    </Template>
  )
}

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail
          }
        }
      }
    }
  }
`

export default IndexPage
