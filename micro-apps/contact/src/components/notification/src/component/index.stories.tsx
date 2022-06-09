import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotificationProvider from './';

// https://storybook.js.org/docs/react/writing-stories/introduction
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TEMPLATE/NotificationProvider',
  component: NotificationProvider,
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
    size: { control: 'select', 'options': ['small', 'large'], defaultValue: 'small', description: 'NotificationProvider size' },
    onClick: { action: 'clicked' },
    onChange: { action: 'change' },
  }
} as ComponentMeta<typeof NotificationProvider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotificationProvider> = (args) => <NotificationProvider {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  message: 'ORINMATRY',
  size: 'small'
};

export const Secondary = Template.bind({});
Secondary.args = {
  message: 'SECONDARY',
  size: 'large'
};
