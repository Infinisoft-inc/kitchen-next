import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Slider from '.';

export default {
  title: 'UX/Slider',
  component: Slider,
  argTypes: {
    direction: { control: 'select', 'options': ['left', 'right'], defaultValue: 'left', description: 'Slider direction' },
  },
  message: {
    description: "Message displayed on the alert popup"
  },
  parameters: {
    docs: {
      description: {
        component: 'Pretty cool slider.',
      },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args}><div style={{backgroundColor:'pink', width: '200px', height: '200px'}}>Hello</div></Slider>;

export const Left = Template.bind({});
Left.args = {
  direction: 'left'
};

export const Right = Template.bind({});
Right.args = {
  direction: 'right'
};
