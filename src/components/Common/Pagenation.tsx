import React, { FunctionComponent } from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/all'
import styled from '@emotion/styled'

type PagenationProps = {
  page: number
  totalPage: number
  onChange: (page: number) => void
}
const Pagenation: FunctionComponent<PagenationProps> = function ({
  page,
  totalPage,
  onChange,
}) {
  // const maxSize = 5
  // const [pages, setpages] = React.useState(
  //   Array.from({ length: totalPage }, (_, i) => i + 1),
  // )
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1)

  const onClickNumber = (num: number) => {
    onChange(num)
  }

  return (
    <PagenationWrap>
      <FiChevronsLeft className="pagination-btn" size={25} />
      <FiChevronLeft className="pagination-btn" size={25} />
      {pages.map((item, i) => (
        <div
          onClick={() => onClickNumber(item)}
          className={
            item === page
              ? 'page-btn pagination-btn selected'
              : 'page-btn pagination-btn'
          }
          key={i}
        >
          {item}
        </div>
      ))}
      <FiChevronRight className="pagination-btn" size={25} />
      <FiChevronsRight className="pagination-btn" size={25} />
    </PagenationWrap>
  )
}

const PagenationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  .pagination-btn {
    cursor: pointer;
    border-radius: 4px;
    :hover {
      background: #ddd;
    }
  }
  .page-btn {
    min-width: 28px;
    padding: 5px;
    text-align: center;
  }
  .selected {
    background: #333 !important;
    color: #fff;
  }
`

export default Pagenation
