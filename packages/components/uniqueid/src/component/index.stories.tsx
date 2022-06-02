import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ButtonA from '.';

export default {
  title: 'TEMPLATE/ButtonA',
  component: ButtonA,
  argTypes: {
    content: {
      name: 'content',
      type: { name: 'string', required: false },
      defaultValue: 'Hello',
      description: 'overwritten description',
      table: {
        category: '',
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
      description: 'This is a super cool button',
    },
  },
} as ComponentMeta<typeof ButtonA>;

const Template: ComponentStory<typeof ButtonA> = (args) => (
  <ButtonA {...args} />
);

export const StringArgs = Template.bind({});
StringArgs.args = {
  title: 'Title',
  content: 'Content',
};

StringArgs.parameters = {
  docs: {
    description: {
      story: 'This is a string',
    },
  },
};
