import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FlexCol from '.';

export default {
  title: 'Layout/FlexCol',
  component: FlexCol,
  argTypes: {

  }
} as ComponentMeta<typeof FlexCol>;

const Template: ComponentStory<typeof FlexCol> = (args) => <FlexCol {...args}>Hello</FlexCol>;

export const StringArgs = Template.bind({});
StringArgs.args = {

};

export const LeftRightPropsArgs = Template.bind({});
StringArgs.args = {

};
