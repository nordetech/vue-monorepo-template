import { Meta, StoryObj } from '@storybook/vue3'
import { Alert, AlertDescription, AlertTitle } from './'
import { Terminal } from 'lucide-vue-next'

const meta = {
  component: Alert,
  title: 'UI/Alert',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'destructive'] },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default' },
  render: args => ({
    components: { Alert, AlertDescription, AlertTitle, Terminal },
    setup() {
      return { args }
    },
    template: `
      <Alert :variant="args.variant">
        <Terminal class="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      `,
  }),
}
