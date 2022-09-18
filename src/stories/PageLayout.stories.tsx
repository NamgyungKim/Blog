import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PageLayout from '../components/Common/PageLayout'
export default {
  title: 'component/PageLayout',
  component: PageLayout,
  argTypes: {},
} as ComponentMeta<typeof PageLayout>
export const Default: ComponentStory<typeof PageLayout> = () => (
  <PageLayout>
    <Contents>contents</Contents>
  </PageLayout>
)

const Contents = styled.div`
  text-align: center;
  line-height: 200px;
  height: 200px;
  background-color: pink;
`
