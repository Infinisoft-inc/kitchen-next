import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toggle from '.';

export default {
  title: 'INPUT/Toggle',
  component: Toggle,
  argTypes: {
    toggles: {
      table: {
        defaultValue: {
          summary: 'None button',
        },

        type: {
          summary: 'Toggle label list',
        },
      },
      control: {
        type: 'object',
      },
    },
    clickHandler: {
      table: {
        category: 'Events',
        type: {
          summary: '(term?: string) => void',
          detail: 'Callback onclick and pass its value as argument',
        },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a Toggles Buttons',
      },
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const ToggleArgs = Template.bind({});
ToggleArgs.args = {
  toggles: ['One', 'Two', 'Tree'],
};

ToggleArgs.parameters = {
  docs: {
    description: {
      story: 'This is toggles names',
    },
  },
};
