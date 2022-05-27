import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CrudList from '.';

export default {
  title: 'Layout/CrudList',
  component: CrudList,
  argTypes: {

  }
} as ComponentMeta<typeof CrudList>;

const Template: ComponentStory<typeof CrudList> = (args) => <CrudList {...args} />;

export const StringArgs = Template.bind({});
StringArgs.args = {

};
