import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputText from '.';
import { LocationIcon, PhoneIcon } from './assets/svg';

export default {
  title: 'Input/InputText',
  component: InputText,
  argTypes: {
    ghost: {
      description: "Transparent background, no border when unfocused",
      table: {
        category: 'Props',
        defaultValue: {
          summary: false,
        },
      },

    },
    copyable: {
      action: 'clicked',
      description: "Adds button to copy value into clipboard and trigger callback",
      table: {
        category: 'Props',
        defaultValue: {
          summary: true,
        }
      }
    },
    onCopy: {
      description: 'Callback called when copy button is clicked',
      table: {
        category: 'Events',
        defaultValue: {
          summary: 'onCopy',
        },
      },
    },
    removable: {
      description: "Adds button to trigger onRemove callback",
      table: {
        category: 'Props',
        defaultValue: {
          summary: true,
        },
      },
    },
    onRemove: {
      description: 'Callback called when remove button is clicked',
      table: {
        category: 'Events',
        defaultValue: {
          summary: 'onRemove',
        },
      },
    },
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
    variant: {
      description: 'Component theme style',
      table: {
        category: 'My Variant',
        defaultValue: {
          summary: 'myvariant',
        },
      },
      options: ['myvariant', 'primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a very flexible Input Text',
      },
    },
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} defaultValue="Default Value" />;

export const Primary = Template.bind({});
Primary.args = {
  copyable: true,
  removable: true,
  label: 'Telephones',
  placeholder: '(514) 784-9826'
};
Primary.parameters = {
  docs: {
    description: {
      story: 'Primary Input Text'
    },
  },
};

export const Before = Template.bind({});
Before.args = {
  before: <PhoneIcon />,
  copyable: true,
  removable: true,
  label: 'Before',

};
Before.parameters = {
  docs: {
    description: {
      story: 'Before Input Text'
    },
  },
};

export const After = Template.bind({});
After.args = {
  after: <LocationIcon />,
  copyable: false,
  removable: false,
  label: 'After',
};
After.parameters = {
  docs: {
    description: {
      story: 'After Input Text'
    },
  },
};

