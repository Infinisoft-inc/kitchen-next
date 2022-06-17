import { ComponentMeta, ComponentStory } from '@storybook/react';
import Spinner from '.';

export default {
  title: 'UX/Spinner',
  component: Spinner,
  argTypes: {
    loaderStyle: {
      description: 'Loader style',
      table: {
        category: 'Loader'
      },
      control: { type: 'object'}
    },
    loaderInnerStyle: {
      description: 'Loader inner style',
      table: {
        category: 'Loader'
      },
      control: { type: 'object'}
    },
    loaderOuterStyle: {
      description: 'Loader outer style',
      table: {
        category: 'Loader'
      },
      control: { type: 'object'}
    },
    spinnerStyle: {
      description: 'Spinner style',
      table: {
        category: 'Spinner',
        defaultValue: {
          color: '#1890ff'
        },
      },
      control: { type: 'object'}

    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Pretty cool spinner.',
      },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args}/>
);

export const StringArgs = Template.bind({});
StringArgs.args = {
};

StringArgs.parameters = {
  docs: {
    description: {
      story: 'Stylable spinner',
    },
  },
};

