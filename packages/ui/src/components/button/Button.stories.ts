import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './Button.vue'

const meta = {
  component: Button,
  title: 'UI/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
  },
  args: { variant: 'default' }, // default value
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: args => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">My label</Button>`,
  }),
}
