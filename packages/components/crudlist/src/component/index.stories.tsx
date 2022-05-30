import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CrudList from '.';
import { PhoneIcon } from './assets/svg';

export default {
  title: 'Input/CrudList',
  component: CrudList,
  argTypes: {
    onClick: { action: 'clicked' },
  }
} as ComponentMeta<typeof CrudList>;

const Template: ComponentStory<typeof CrudList> = (args) => {
  return <></>
  // <CrudList title={'Telephones'} icon={<PhoneIcon />} store={createstore(['dog'])} />

}
export const StringArgs = Template.bind({});
StringArgs.args = {
  title: 'Example List',
  icon: <PhoneIcon />,
};
