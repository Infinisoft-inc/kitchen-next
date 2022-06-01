import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Fader from '.';


export default {
  title: 'UX/Fader',
  component: Fader,
  argTypes: {
    children: {
      onClick: { action: 'clicked'}
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Pretty cool fader.',
      },
    },
  },
} as ComponentMeta<typeof Fader>;

const Template: ComponentStory<typeof Fader> = (args) => (
  <Fader {...args}>
    <div style={{ backgroundColor: 'black', width: '200px', height: '200px' }}>
      Hello
    </div>
  </Fader>
);

export const StringArgs = Template.bind({});
StringArgs.args = {
  children: ''
 }

