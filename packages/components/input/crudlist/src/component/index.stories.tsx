import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useSyncExternalStore } from 'react';
import type { IStore } from 'store/types';
import CrudList from '.';
import { PhoneIcon } from './assets/svg';

export default {
  title: 'Input/CrudList',
  component: CrudList,
  argTypes: {
    onClick: { action: 'clicked' },
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


const Template: ComponentStory<typeof CrudList> = (args, context) => {

  const state = useSyncExternalStore<string[]>(context.store.subscribe, context.store.getSnapshot)
  const store: IStore<string[], string, string, string> = context.store


  const onAdd = () => {
    store.mutate(_state => {
      _state.unshift('Insert number')
      return [..._state];
    })
  }

  const onRemove = (i: number, item: string) => {
    store.mutate(_state => {
      return [..._state.filter((_, index) => i !== index)];
    })
  }
  const onChange = (i: number, item: string, newValue: string) => {
    store.mutate(_state => {
      _state[i] = newValue
      return [..._state];
    })
  }

  return <CrudList {...args} onAdd={onAdd} onChange={onChange} onRemove={onRemove} list={state} />

}
export const StringArgs = Template.bind({});
StringArgs.args = {
  title: 'Example List',
  icon: <PhoneIcon />,
};
