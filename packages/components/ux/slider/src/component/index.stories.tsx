import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Slider from '.';

export default {
  title: 'Ux/Slider',
  component: Slider,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      defaultValue: {
        summary: 'left',
      },
      description: 'Slider direction',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Add component slider effect',
      },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>
    <div style={{ backgroundColor: 'pink', width: '200px', height: '200px' }}>
      Hello
    </div>
  </Slider>
);

export const Left = Template.bind({});
Left.args = {
  direction: 'left',
};

Left.parameters = {
  docs: {
    description: {
      story: 'Left direction effect',
    },
  },
};

export const Right = Template.bind({});
Right.args = {
  direction: 'right',
};

Right.parameters = {
  docs: {
    description: {
      story: 'Right direction effect',
    },
  },
};
