import { Meta, StoryObj } from '@storybook/vue3'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './'

const meta = {
  component: Accordion,
  title: 'UI/Accordion',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['single', 'multiple'] },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { type: 'single' },
  render: args => ({
    components: { Accordion, AccordionContent, AccordionItem, AccordionTrigger },
    setup() {
      const defaultValue = 'item-1'

      const accordionItems = [
        { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
        {
          value: 'item-2',
          title: 'Is it unstyled?',
          content: "Yes. It's unstyled by default, giving you freedom over the look and feel.",
        },
        {
          value: 'item-3',
          title: 'Can it be animated?',
          content: 'Yes! You can use the transition prop to configure the animation.',
        },
      ]

      return { args, accordionItems, defaultValue }
    },
    template: `
      <Accordion :type="args.type" class="w-full" collapsible :default-value="defaultValue">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      `,
  }),
}
