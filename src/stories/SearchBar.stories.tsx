import { ComponentMeta, ComponentStory } from '@storybook/react'
import SearchBar from '../components/Main/SearchBar'

export default {
  title: 'component/SearchBar',
  component: SearchBar,
  argTypes: {},
} as ComponentMeta<typeof SearchBar>
export const Default: ComponentStory<typeof SearchBar> = () => {
  const search = (keyWord: string) => {
    console.log(keyWord)
  }

  return <SearchBar search={search} />
}
