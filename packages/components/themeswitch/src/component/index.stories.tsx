import { ComponentMeta, ComponentStory } from '@storybook/react';
import ThemeSwitch from '.';

export default {
  title: 'Theme/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {
    'Background Color': {
      table: {
        category: 'Tokens',
        type: {
          summary: '--themeswitch-background-color',
        },
        defaultValue: { summary: 'var(--md-sys-color-primary)' },
      },
      control: {
        type: null,
      },
    },
    'Text Color': {
      table: {
        category: 'Tokens',
        type: {
          summary: '--themeswitch-text-color:',
        },
        defaultValue: { summary: 'var(--md-sys-color-on-primary)' },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Theme switch toggle between dark and light mode.',
      },
    },
  },
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => {
  return <div style={{width: '24px', height: '24px'}}>
    <ThemeSwitch {...args}/>
  </div>
};

export const Example = Template.bind({});
Example.args = {

};

Example.parameters = {
  docs: {
    description: {
      story: 'Theme switch toggle between dark and light mode.',
    },
  },
};
