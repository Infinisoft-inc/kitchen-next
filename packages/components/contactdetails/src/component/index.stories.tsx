import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ContactDetails from '.';

export default {
  title: 'Layout/ContactDetails',
  component: ContactDetails,
} as ComponentMeta<typeof ContactDetails>;

const Template: ComponentStory<typeof ContactDetails> = (args) => <ContactDetails {...args} />;

export const StringArgs = Template.bind({});
StringArgs.args = {
  title: 'Title',
  content: 'Content'
};
