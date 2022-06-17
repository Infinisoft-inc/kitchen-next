import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chip from '.';
import './index.module.css';

export default {
  title: 'INPUT/Chip',
  component: Chip,
  argTypes: {
    children: {
      defaultValue: '',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: 'text',
      },
    },
    "border-color": {
        table: {
            category: 'TOKEN',
            type: {
              summary: `--chip-border-color`,
            },
            defaultValue: { summary: `var(--md-sys-color-outline)` },
          },
          control: {
            type: null,
          },
    },
    "color": {
        table: {
            category: 'TOKEN',
            type: {
              summary: `--chip-color`,
            },
            defaultValue: { summary: `var(--md-sys-color-on-surface-variant)` },
          },
          control: {
            type: null,
          },
    },
    onRemove: {
      table: {
        category: 'Events',
        type: {
          summary: '() => void',
        },
      },
    },
    onChange: {
      table: {
        category: 'Events',
        type: {
          summary: '(arg: string)=>void',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a chip',
      },
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => {
  return (
    <div style={{ width: 80 }}>
      <Chip {...args} />
    </div>
  );
};

export const ContentArgs = Template.bind({});
ContentArgs.args = {
  children: 'Hello',
};

ContentArgs.parameters = {
  docs: {
    description: {
      story: 'This is a chip',
    },
  },
};