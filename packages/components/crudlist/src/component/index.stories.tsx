import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useSyncExternalStore } from 'react';
import type { IStore } from 'store/types';
import CrudList from '.';
import { PhoneIcon } from './assets/svg';

export default {
  title: 'Input/CrudList',
  component: CrudList,
  argTypes: {
    onClick: { action: 'clicked',
    description: '`onClick={onAdd}`',
      table: {
        category: 'Event'
      } },
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
  decorators: [
    (Story, context) => {
      const store: IStore<any, any, any, any> = context.createstore(() => ['514-796-0626'])

      return <>
        {!store &&
          <>Creating context...</>
        }
        {store &&
          <Story store={store} />
        }
      </>
    }
  ]

} as ComponentMeta<typeof CrudList>;


const Template: ComponentStory<typeof CrudList> = ({icon, ...args}, context) => {
  const customIcon = String(icon).includes('blob:http') ? <img src={String(icon)}/>: icon
  const state = useSyncExternalStore<string[]>(context.store.subscribe, context.store.getSnapshot)
  const store: IStore<string[], string, string, string> = context.store


  const onAdd = () => {
    store.mutate(_state => {
      _state.unshift('Insert number')
      return [..._state];
    })
  }

  const onRemove = (i: number) => {
    store.mutate(_state => {
      return [..._state.filter((_, index) => i !== index)];
    })
  }
  const onChange = (i: number, newValue: string) => {
    store.mutate(_state => {
      _state[i] = newValue
      return [..._state];
    })
  }

  return <CrudList {...args} onAdd={onAdd} onChange={onChange} onRemove={onRemove} itemList={state} icon={customIcon} />

}
export const Example = Template.bind({});
Example.args = {
  title: 'Example List',
  icon: <PhoneIcon/>,
};
