import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pulse from '.';

// https://storybook.js.org/docs/react/writing-stories/introduction
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Ux/Pulse',
  component: Pulse,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    direction: { control: 'select', 'options': ['vertical', 'horizontal'], defaultValue: 'horizontal', description: 'Pulse direction' },
  }
} as ComponentMeta<typeof Pulse>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pulse> = (args) => <Pulse {...args}><div style={{ height: '50px', width: '50px', backgroundColor: 'blue' }} /></Pulse>;

export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Horizontal.args = {
  direction: 'horizontal'
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical'
};
