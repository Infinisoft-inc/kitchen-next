import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Fader from '.';

export default {
  title: 'Ux/Fader',
  component: Fader,
  argTypes: { 
      button: {
        description: 'Click the button for fade effect',
        table: {
          defaultValue: {
            summary: 'onClick',
          },
        },
        control: { type: null},
      onClick: { action: 'clicked'}
      },
    },
  parameters: {
    docs: {
      description: {
        component: 'Component wrapper that gives a fade effect',
      },
    },
  },
} as ComponentMeta<typeof Fader>;



const Template: ComponentStory<typeof Fader> = (args) => {
const [state, setState] = React.useState(1);

  return (
  <div key={state}><Fader {...args}>
    <div  style={{ backgroundColor: 'black', width: '200px', height: '200px' }}>
      Hello
    </div>
  </Fader><button
    style={{  color: 'black', background: 'white', marginTop: '3rem' }}
    onClick={() => setState((prev) => prev + 1)}
  >
      Retry
    </button></div>
);};

export const StringArgs = Template.bind({});
StringArgs.args = {
};

StringArgs.parameters = {
  docs: {
    description: {
      story: 'This is a string',
    },
  },
};


