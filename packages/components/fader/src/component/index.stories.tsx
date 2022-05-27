import { ComponentMeta, ComponentStory } from '@storybook/react';
import Fader from '../../../../../../kitchen-next/packages/components/fader/src/component';

// https://storybook.js.org/docs/react/writing-stories/introduction
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UX/Fader',
  component: Fader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    },
    message: {
      description: "Message displayed on the alert popup"
    },
  
} as ComponentMeta<typeof Fader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Fader> = (args) => <Fader {...args} ><div style={{backgroundColor:'black', width: '200px', height: '200px'}}>Hello</div></Fader>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};
