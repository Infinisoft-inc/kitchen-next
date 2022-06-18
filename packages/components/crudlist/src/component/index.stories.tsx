import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CrudList from '.';
import { PhoneIcon } from './assets/svg';

export default {
  title: 'Input/CrudList',
  component: CrudList,
  argTypes: {
    onClick: {
      action: 'clicked',
      description: '`onClick={onAdd}`',
      table: {
        category: 'Event'
      }
    },
    onAdd: {
      table: {
        category: 'Event',
      },
    },
    onRemove: {
      table: {
        category: 'Event',
      },
    },
    onChange: {
      table: {
        category: 'Event',
      },
    },
    title: {
      description: 'string',
      table: {
        category: 'Items',
        defaultValue: {
          summary: 'Example List',
        },
      },
    },
    icon: {
      description: `<PhoneIcon/>`,
      table: {
        category: 'Items',
      },
      control: { type: 'file' },
    },
    itemList: {
      table: {
        category: 'Items',
        defaultValue: {
          summary: `[]`,
        },
      },
    },
  },

} as ComponentMeta<typeof CrudList>;


const Template: ComponentStory<typeof CrudList> = ({ icon, ...args }, context) => {
  const customIcon = String(icon).includes('blob:http') ? <img src={String(icon)} /> : icon

  const [_state, _setState] = React.useState<string[]>();

  const onAdd = (newValue?: any) => {
    if (!newValue) {
      return;
    }

    _setState(_prev => _prev ? [newValue, ..._prev] : [newValue])
  }

  const onRemove = (i: number) => {
    _setState(_prev => {
      return _prev ? [..._prev.filter((_, index) => i !== index)] : [];
    })
  }
  const onChange = (i: number, newValue: string) => {
    _setState(_prev => {
      if (!_prev) {
        return [newValue]
      }

      _prev[i] = newValue
      return [..._prev];

    })
  }

  return <div style={{maxWidth: '300px'}}><CrudList {...args} onAdd={onAdd} onChangeItem={onChange} onRemove={onRemove} itemList={_state} icon={customIcon} /></div>

}
export const Example = Template.bind({});
Example.args = {
  label: 'Example List',
  icon: <PhoneIcon />,
  placeholder: '(514) 895-4274'
};
