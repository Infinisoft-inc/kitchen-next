import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from '.';

export default {
  title: 'TEMPLATE/Table',
  component: Table,
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
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}/>
);

export const StringArgs = Template.bind({});
StringArgs.args = {
data: {
  first: {
    name: 'dog1'
  },
  second: {
    name: 'dog2'
  },
  third: {
    name: 'dog3'
  },
  fourth: {
    name: 'dog4'
  }
},
columns: {
  name: {}
}
};
