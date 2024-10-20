import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from '@emotion/styled'

type SidebarNavProps = {
  html: string
}

const SidebarNav: FunctionComponent<SidebarNavProps> = function ({ html }) {
  const [navItem, setNavItem] = useState<
    { tagName: string; innerHTML: string }[]
  >([])

  useEffect(() => {
    const $div = document.createElement('div')
    $div.innerHTML = html
    const headingTag = $div.querySelectorAll('h1,h2,h3,h4,h5,h6')
    const itemsArray = Array.from(headingTag)
    let setData: { tagName: string; innerHTML: string }[] = []
    for (const { tagName, innerHTML } of itemsArray) {
      setData = [...setData, { tagName, innerHTML }]
    }
    setNavItem(setData)
    $div.remove()
  }, [])

  const scrollTo = (html: string) => {
    window.location.hash = html
  }

  return (
    <SidebarNavWrapper>
      <ul>
        {navItem.map(({ tagName, innerHTML }, index) => (
          <li
            onClick={() => scrollTo(innerHTML)}
            key={index}
            className={tagName}
          >
            {innerHTML}
          </li>
        ))}
      </ul>
    </SidebarNavWrapper>
  )
}

const SidebarNavWrapper = styled.div`
  position: sticky;
  top: 50px;
  margin-left: -280px;
  max-width: 250px;
  word-wrap: break-word;
  height: 0px;
  @media (max-width: 1300px) {
    visibility: hidden;
  }
  ul li {
    color: #444;
    margin-top: 10px;
    font-size: 14px;
    cursor: pointer;
    :hover {
      color: #999;
    }
  }
  .H2 {
    font-weight: bold;
  }
  .H3 {
    padding-left: 10px;
  }
  .H4 {
    padding-left: 20px;
  }
`

export default SidebarNav
