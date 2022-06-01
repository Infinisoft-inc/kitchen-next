import { ComponentMeta, ComponentStory } from '@storybook/react';
import Booper from '.';

export default {
  title: 'UX/Booper',
  component: Booper,
  parameters: {
    docs: {
      description: {
        component: 'Pretty cool booper.',
      },
    },
  },
} as ComponentMeta<typeof Booper>;

const Template: ComponentStory<typeof Booper> = () => <Booper><div style={{ height: '50px', width: '50px', backgroundColor: 'blue' }} /></Booper>;

export const Primary = Template.bind({});


