import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toggle from '.';

export default {
  title: 'TEMPLATE/Toggle',
  component: Toggle,
  argTypes: {
    toggles: {
      control: false
    },
    content: {
      defaultValue: '',
      description: 'overwritten description',
      table: {
        category: 'Content',
        type: {
          summary: 'something short',
          detail: 'something really really long',
        },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a super cool button',
      },
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => (
  <Toggle {...args} />
);

export const StringArgs = Template.bind({});
StringArgs.args = {
  toggles: ['one', 'two', 'three']
};

StringArgs.parameters = {
  docs: {
    description: {
      story: 'This is a string',
    },
  },
};
