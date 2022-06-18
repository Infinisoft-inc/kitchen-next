import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputText from '.';
import { PhoneIcon } from './assets/svg';

export default {
  title: 'Input/InputText',
  component: InputText,
  argTypes: {
      before: {
      description: 'Component before',
      table: {
        category: 'Prefix',
        defaultValue: {
          summary: 'Copyable & Removable',
        },
      },
      control: { type: 'null' },
    },
    after: {
      description: 'Component after',
      table: {
        category: 'Suffix',
        defaultValue: {
          summary: 'Add',
        },
      },
      control: { type: 'null' },
    },
  },

} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Telephones',
  placeholder: '(514) 784-9826'
};
Primary.parameters = {
  docs: {
    description: {
      story: 'Input Text Example'
    },
  },
};

export const Before = Template.bind({});
Before.args = {
  before: <PhoneIcon />,
  label: 'Before',

};
Before.parameters = {
  docs: {
    description: {
      story: 'SVG Before Input Text'
    },
  },
};

export const After = Template.bind({});
After.args = {
  after:  <PhoneIcon />,
  label: 'After',
  inverse:true
};
After.parameters = {
  docs: {
    description: {
      story: 'SVG After Input Text'
    },
  },
};

