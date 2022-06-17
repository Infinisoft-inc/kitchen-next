import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dialog from '.';

export default {
  title: 'TEMPLATE/Dialog',
  component: Dialog,
  argTypes: {
    content: {
      defaultValue: '',
      description: 'overwritten description',
      table: {
        category: 'Content',
        type: {
          summary: 'something short',
          detail: 'something really really long',
        },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a super cool button',
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = ({onClick, ...args}) => {

  return <><button onClick={onClick}>Open</button><Dialog {...args} /></>
};

export const Example = Template.bind({});
Example.args = {
  children: <>Example Dialog</>,
  openEvents: ['dialog.open'],
  onClick: () => { window.dispatchEvent(new CustomEvent('dialog.open'))}
};

Example.parameters = {
  docs: {
    description: {
      story: 'This is a string',
    },
  },
};
