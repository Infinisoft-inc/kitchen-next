import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import AddPhone from '.';

export default {
  title: 'TEMPLATE/AddPhone',
  component: AddPhone,
  argTypes: {
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
} as ComponentMeta<typeof AddPhone>;

const Template: ComponentStory<typeof AddPhone> = (args) => (
  <AddPhone {...args}/>
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

export const StringArgs2 = Template.bind({});
StringArgs2.args = {
  title: 'Title',
  content: 'Content',
};

StringArgs2.parameters = {
  docs: {
    description: {
      story: 'This is a string2',
    },
  },
};
