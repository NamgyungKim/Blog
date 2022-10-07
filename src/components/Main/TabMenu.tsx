import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { color, text } from '../../styles/theme'
import { BiSearch } from 'react-icons/bi'

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const TabMenu: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name === 'All' ? (
            <BiSearch
              size={18}
              color={name === selectedCategory ? color.$blue : color.$gray500}
            />
          ) : null}
          <span>
            {name}({count})
          </span>
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid ${color.$gray300};
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 3px 10px ${({ active }) => (active ? '1px' : '3px')};
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ active }) => (active ? color.$blue : color.$gray500)};
  ${({ active }) =>
    active ? `border-bottom: 2px solid ${color.$blue};` : null}
  ${text.$body1}
  svg {
    margin-right: 3px;
  }
`

export default TabMenu
