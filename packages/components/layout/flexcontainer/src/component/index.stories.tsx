import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FlexContainer from '.';

export default {
  title: 'layout/FlexContainer',
  component: FlexContainer,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'Flex container',
      },
    },
  },
} as ComponentMeta<typeof FlexContainer>;

const Template: ComponentStory<typeof FlexContainer> = (args) => (
  <FlexContainer {...args}>
    <div style={{ flex: 1, backgroundColor: 'blue' }}> I am inside a flex container</div>
  </FlexContainer>
);

export const Example = Template.bind({});
