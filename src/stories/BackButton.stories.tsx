import { ComponentMeta, ComponentStory } from '@storybook/react'
import BackButton from '../components/Common/BackButton'
export default {
  title: 'component/BackButton',
  component: BackButton,
  argTypes: {},
} as ComponentMeta<typeof BackButton>
export const Default: ComponentStory<typeof BackButton> = () => (
  <BackButton></BackButton>
)
