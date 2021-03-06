import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Pulse from '.';

export default {
  title: 'Ux/Pulse',
  component: Pulse,
  argTypes: {
    direction: { control: 'select', 'options': ['vertical', 'horizontal'], defaultValue: 'horizontal', description: 'Pulse direction' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Wrapper component adding pulse effect.',
      },
    },
  },
} as ComponentMeta<typeof Pulse>;

const Template: ComponentStory<typeof Pulse> = (args) => (
  <Pulse {...args}><div style={{ height: '50px', width: '50px', backgroundColor: 'blue' }} /></Pulse>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
};

Horizontal.parameters = {
  docs: {
    description: {
      story: 'Pulse horizontaly',
    },
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
};

Vertical.parameters = {
  docs: {
    description: {
      story: 'Pulse verticaly',
    },
  },
};
