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
    prefix: {
      description: 'Component prefix'
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

export const Prefix = Template.bind({});
Prefix.args = {
  //@ts-ignore
  prefix: <PhoneIcon />,
  defaultValue: "Default value",
  ghost: false,
  copyable: true,
  removable: true,
};
export const Suffix = Template.bind({});
Suffix.args = {
  //@ts-ignore
  suffix: <LocationIcon />,
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
