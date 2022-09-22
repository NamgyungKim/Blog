import { ComponentMeta, ComponentStory } from '@storybook/react'
import TabMenu from '../components/Main/TabMenu'

export default {
  title: 'component/TabMenu',
  component: TabMenu,
  argTypes: {
    selectedCategory: {
      defaultValue: 'All',
      control: { type: 'radio' },
      options: ['All', 'test1', 'test2', 'test3'],
    },
    categoryList: {
      defaultValue: {
        All: 38,
        test1: 33,
        test2: 2,
        test3: 3,
      },
    },
  },
} as ComponentMeta<typeof TabMenu>

export const Default: ComponentStory<typeof TabMenu> = args => (
  <TabMenu {...args}></TabMenu>
)
