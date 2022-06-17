import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

const COMPONENT = "Button"

export default {
  title: 'input/Button',
  component: Button,
  argTypes: {
    "background-color": {
      table: {
        category: 'TOKEN',
        type: {
          summary: `--color-primary-background`,
        },
        defaultValue: { summary: `var(--md-sys-color-primary-light)` },
      },
      control: {
        type: null,
      },
    },
    "color": {
      table: {
        category: 'TOKEN',
        type: {
          summary: `--text-primary`,
        },
        defaultValue: { summary: `var(--md-sys-color-on-primary-dark)` },
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}/>
);

export const TokenArgs = Template.bind({});
TokenArgs.args = {

};

TokenArgs.parameters = {
  docs: {
    description: {
      story: 'This is Background Color Token and Text Color Token',
    },
  },
};


