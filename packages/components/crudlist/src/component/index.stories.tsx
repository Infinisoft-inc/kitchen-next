import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CrudList, { createstore } from '.';
import { PhoneIcon } from './assets/svg';

export default {
  title: 'Input/CrudList',
  component: CrudList,
  argTypes: {
    onClick: { action: 'clicked' },
  }
} as ComponentMeta<typeof CrudList>;

const Template: ComponentStory<typeof CrudList> = (args) => {
//@ts-ignore
  return <CrudList title={<h1>Telephones</h1>} icon={<PhoneIcon />} mystore={createstore(['dog'])} />

}
export const StringArgs = Template.bind({});
StringArgs.args = {
  title: 'Example List',
  icon: <PhoneIcon />,
};
