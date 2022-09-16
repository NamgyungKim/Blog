import { ComponentMeta, ComponentStory } from '@storybook/react'

import Footer from '../components/Common/Footer'

export default {
  title: 'component/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () => <Footer></Footer>
