import { ComponentMeta, ComponentStory } from '@storybook/react';
import Booper from '.';

// https://storybook.js.org/docs/react/writing-stories/introduction
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UX/Booper',
  component: Booper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // https://storybook.js.org/docs/react/essentials/controls

} as ComponentMeta<typeof Booper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Booper> = () => <Booper><div style={{ height: '50px', width: '50px', backgroundColor: 'blue' }} /></Booper>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args


