import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotificationProvider, { useNotification } from '.';
import './index.module.css';

export default {
  title: 'TEMPLATE/NotificationProvider',
  component: NotificationProvider,
  decorators: [
    (Story) => (
      <NotificationProvider>
        <Story />
      </NotificationProvider>
    ),
  ],
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

const Template: ComponentStory<typeof NotificationProvider> = (args) => {


  return <NotificationProvider {...args}><MyComponent /></NotificationProvider>
};

const MyComponent = () => {
  const { Notification, notification } = useNotification()


  return <div>
    <button onClick={() => notification?.show?.({ header: 'Hello', content: 'World!' })}>Show me</button>
    <Notification />
  </div>
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // message: 'ORINMATRY',
  // size: 'small'
};

export const Secondary = Template.bind({});
Secondary.args = {
  // message: 'SECONDARY',
  // size: 'large'
};
