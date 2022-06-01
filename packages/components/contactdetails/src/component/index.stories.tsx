import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ContactDetails from '.';

export default {
  title: 'Layout/ContactDetails',
  component: ContactDetails,
  argTypes: {
    title: {
      description: 'String',
      table: {
        category: 'Text',
      },
    },
    content: {
      description: 'String',
      table: {
        category: 'Text',
      },
    },
    className: {
      description: 'String',
      table: {
        category: 'Text',
      },
    },
    editableFieldName: {
      description: 'String',
      table: {
        category: 'Editable',
      },
    },
    icon: {
      description: 'Icon',
      table: {
        category: 'Icon',
      },
      control: { type: 'file', accept: '.png' },
    },
    onChange: {
      description: 'false | {onChange: (val: string) => void}',
      table: {
        category: 'Event',
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Some contact details.',
      },
    },
  },
} as ComponentMeta<typeof ContactDetails>;

const Template: ComponentStory<typeof ContactDetails> = (args) => (
  <ContactDetails {...args} />
);

export const StringArgs = Template.bind({});
StringArgs.args = {
  title: 'Title',
  content: 'Content',
  editableFieldName: '',
};
