import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from '.';

export default {
  title: 'LAYOUT/Table',
  component: Table,
  argTypes: {
    data: {
      defaultValue: '',
      table: {
        type: {
          summary: 'Record<string, T>',
          detail: 'Map data',
        },
      },
      control: {
        type: 'object',
      },
    },
    columns: {
      defaultValue: '',
      table: {
        type: {
          summary: 'Record<string, TableRowConfig<T>>',
          detail: 'Columns config',
        },
      },
      control: {
        type: 'object',
      },
    },
    options: {
      default: true,
      table: {
        type: {
          summary: 'pagination: boolean, rowPerPage: number',
          detail: 'Pagination config',
        },
      },
      control: {
        type: 'boolean',
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

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const TableArgs = Template.bind({});
TableArgs.args = {
  data: {
    first: {
      name: 'dog1',
      telephones: '555-555-5555',
      address: '1234 rue abcd, AlphabetTown, QC, Canada, J9F 7U3',
      email: 'abc@defg.hij',
    },
    second: {
      name: 'dog2',
      telephones: '555-555-5555',
      address: '1234 rue abcd, AlphabetTown, QC, Canada, J9F 7U3',
      email: 'abc@defg.hij',
    },
    third: {
      name: 'dog3',
      telephones: '555-555-5555',
      address: '1234 rue abcd, AlphabetTown, QC, Canada, J9F 7U3',
      email: 'abc@defg.hij',
    },
    fourth: {
      name: 'dog4',
      telephones: '555-555-5555',
      address: '1234 rue abcd, AlphabetTown, QC, Canada, J9F 7U3',
      email: 'abc@defg.hij',
    },
  },
  columns: {
    name: {},
    telephones: {},
    address: {},
    email: {},
  },
  options: {
    pagination: true,
    rowPerPage: 3,
  },
};

TableArgs.parameters = {
  docs: {
    description: {
      story: 'There is table content',
    },
  },
};
