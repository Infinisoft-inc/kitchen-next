import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import InputText from '.';
import { LocationIcon, PhoneIcon } from './assets/svg';

export default {
  title: 'Input/InputText',
  component: InputText,
  argTypes: {
    ghost: {
      description: "Transparent background, no border when unfocused"
    },
    copyable: {
      description: "Adds button to copy value into clipboard and trigger callback"
    },
    onCopy: {
      description: 'Callback called when copy button is clicked'
    },
    removable: {
      description: "Adds button to trigger onRemove callback"
    },
    onRemove: {
      description: 'Callback called when remove button is clicked'
    },
    before: {
      description: 'Component before'
    },
    after: {
      description: 'Component after'
    }

  }
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} defaultValue="Default value"/>;

export const Primary = Template.bind({});
Primary.args = {
  ghost: false,
  copyable: true,
  removable: true,
};

export const Before = Template.bind({});
Before.args = {
  before: <PhoneIcon />,
  defaultValue: "Default value",
  ghost: false,
  copyable: true,
  removable: true,
};
export const After = Template.bind({});
After.args = {
  after: <LocationIcon />,
  defaultValue: "Default value",
  ghost: false,
  copyable: false,
  removable: false,
};
export const MyVariant = Template.bind({});
MyVariant.args = {
  variant: 'myvariant',
  defaultValue: "Default value",
  ghost: false,
  copyable: true,
  removable: true,
};
