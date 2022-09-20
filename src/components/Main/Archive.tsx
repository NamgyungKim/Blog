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
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) => {
  return (
    <Box to={link}>
      <div>
        <span>{`${categories} > ${date}`}</span>
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
      {gatsbyImageData ? (
        <GatsbyImage image={gatsbyImageData} alt="alt" />
      ) : null}
    </Box>
  )
}

const Box = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 25px 0;
  border-bottom: 1px solid ${color.$gray300};
  cursor: pointer;
  span {
    color: ${color.$gray500};
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
  img {
    max-width: 300px;
    margin-left: 20px;
    object-fit: cover;
  }
  ${media.tablet} {
    img {
      display: none;
    }
  }
`

export default Archive
