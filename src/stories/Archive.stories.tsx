import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PostFrontmatterType } from 'types/PostItem.types'
import Archive from '../components/Main/Archive'
export default {
  title: 'component/Archive',
  component: Archive,
  argTypes: {},
} as ComponentMeta<typeof Archive>

const data: PostFrontmatterType = {
  title: 'SEO 최적화 하는 방법',
  date: '2022.03.20',
  categories: ['abc'],
  summary:
    '내 홈페이지를 검색엔진 첫 페이지에 노출 하는방법. 1. 사이트 보안(https) 2. 모바일 최적화 3.페이지 최적화를 통해서 SEO를 최적화 할 수 있습니다. 키워드 찾기, 내 홈페이지를 검색엔진 첫 페이지에 노출 하는방법. 1. 사이트 보안(https) 2. 모바일 최적화 3.페이지 최적화를 통해서 SEO를 최적화 할 수 있습니다. 키워드 찾기, ',
  thumbnail: {
    childImageSharp: {},
    publicURL: 'url',
  },
}

export const Default: ComponentStory<typeof Archive> = () => (
  <Archive {...data} link={'/'} />
)
