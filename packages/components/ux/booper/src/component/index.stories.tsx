import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Booper from '.';

export default {
  title: 'Ux/Booper',
  component: Booper,
  argTypes: {
    children: {
      description: '`children?: React.ReactNode`',
      table: {
        defaultValue: { 
          summary: '{children}',
        },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Adding component booper effect',
      },
    },
  },
} as ComponentMeta<typeof Booper>;

const Template: ComponentStory<typeof Booper> = (args) => (
  <Booper {...args}><div style={{ height: '50px', width: '50px', backgroundColor: 'blue' }} />BooP!</Booper>
);

export const BooperArgs = Template.bind({});
BooperArgs.args = {
  children: 'React.ReactNode',
};

BooperArgs.parameters = {
  docs: {
    description: {
      story: 'Booper effect',
    },
  },
};


