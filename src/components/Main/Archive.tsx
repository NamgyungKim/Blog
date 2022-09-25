import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'
import { PostFrontmatterType } from 'types/PostItem.types'
import { color, text, media } from '../../styles/theme'

type PostItemProps = PostFrontmatterType & { link: string }

const Archive: FunctionComponent<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}) => {
  const gatsbyImageData = thumbnail?.childImageSharp?.gatsbyImageData
  return (
    <Box to={link}>
      <div>
        <span>{`${categories} > ${date}`}</span>
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
      {gatsbyImageData ? <Image image={gatsbyImageData} alt="alt" /> : null}
    </Box>
  )
}

const Box = styled(Link)`
  display: flex;
  text-decoration: none;
  width: 100%;
  padding: 25px 0;
  justify-content: space-between;
  border-bottom: 1px solid ${color.$gray300};
  cursor: pointer;
  span {
    color: ${color.$gray500};
    ${text.$caption}
  }
  h2 {
    ${text.$body1}
    margin: 6px 0;
    color: ${color.$blue};
    font-weight: bold;
  }
  p {
    color: ${color.$black};
    ${text.$body2}
    line-height: 150%;
  }
  :hover {
    h2 {
      text-decoration: underline;
    }
  }
`

const Image = styled(GatsbyImage)`
  max-width: 200px;
  max-height: 150px;
  margin-left: 10px;
  ${media.tablet} {
    display: none !important;
  }
`

export default Archive
