import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Chip from '.';

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
      action: true,
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

export const Demo = {
  play: async ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.clear(canvas.getByRole('button'));
    await expect(args.onRemove).toHaveBeenCalled();
  },
};

const Template: ComponentStory<typeof Chip> = (args) => {
  return (
    <div style={{ width: 80 }}>
      <Chip {...args} />
    </div>
  );
};



export const ContentArgs = Template.bind({});
ContentArgs.args = {
  children: ''
};

ContentArgs.parameters = {
  docs: {
    description: {
      story: 'This is a chip',
    },
  },
};