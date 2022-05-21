import { ComponentMeta, ComponentStory } from '@storybook/react';
import Slider from '.';

// https://storybook.js.org/docs/react/writing-stories/introduction
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TEMPLATE/Slider',
  component: Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
  },
  message: {
    description: "Message displayed on the alert popup"
  }
} as ComponentMeta<typeof Slider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args}><div style={{backgroundColor:'pink', width: '200px', height: '200px'}}>Hello</div></Slider>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  direction: 'left'
};

export const Secondary = Template.bind({});
Secondary.args = {
  direction: 'right'
};
