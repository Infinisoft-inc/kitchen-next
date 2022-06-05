import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FlexItem from '.';

export default {
  title: 'layout/FlexItem',
  component: FlexItem,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'Flex item',
      },
    },
  },
} as ComponentMeta<typeof FlexItem>;

const Template: ComponentStory<typeof FlexItem> = (args) => (
  <FlexItem {...args}>
    <div style={{ backgroundColor: 'blue', color: 'white', padding: '1rem' }}> I am inside a flex item</div>
  </FlexItem>
);

export const Example = Template.bind({});
