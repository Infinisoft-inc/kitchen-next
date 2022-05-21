import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonDog from '.';

// https://storybook.js.org/docs/react/writing-stories/introduction
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TEMPLATE/ButtonDog',
  component: ButtonDog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    backgroundColor: {
      description: "Backgroundcolor descrpition",
      control: 'color'
    },
    message: {
      description: "Message displayed on the alert popup"
    },
    size: { control: 'select', 'options': ['small', 'large'], defaultValue: 'small', description: 'ButtonDog size' },
    onClick: { action: 'clicked' },
    onChange: { action: 'change' },
  }
} as ComponentMeta<typeof ButtonDog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonDog> = (args) => <ButtonDog {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  message: 'Message1',
  size: 'small'
};

export const Secondary = Template.bind({});
Secondary.args = {
  message: 'Message2',
  size: 'large'
};
