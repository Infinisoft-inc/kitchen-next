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
          summary: 'The children is what is rendered in the input chip',
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
            type: 'color',
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
            type: 'color',
          },
    },
    onRemove: {
      action: 'clicked',
      table: {
        category: 'Events',
        type: {
          summary: 'Remove chip input when the button is clicked',
          detail: `() => void`,
        },
      },
    },
    onChange: {
      table: {
        category: 'Events',
        type: {
          summary: 'Change the value when a new value is call in the input chip',
          detail: `(args: string) => void`,
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
    await userEvent.click(canvas.getByRole('button'));
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



export const InputChip = Template.bind({});
InputChip.args = {
   children: 'Im the children'  
};

InputChip.parameters = {
  docs: {
    description: {
      story: 'This is a chip',
    },
  },
};