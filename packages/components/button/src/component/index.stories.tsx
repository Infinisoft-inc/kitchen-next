import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from '.';


export default {
  title: 'Infinisoft/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      description: "Backgroundcolor description",
      control: 'color'
    },
    message: {
      description: "Message displayed on the alert popup"
    },
    size: { control: 'select', 'options': ['small', 'large'], defaultValue: 'small', description: 'Button size' },
    onClick: { action: 'clicked' },
    onChange: { action: 'change' },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: 'ORINMATRY',
  size: 'small'
};

export const Secondary = Template.bind({});
Secondary.args = {
  message: 'SECONDARY',
  size: 'large'
};
