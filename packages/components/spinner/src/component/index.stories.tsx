import { ComponentMeta, ComponentStory } from '@storybook/react';
import Spinner from '.';

// https://storybook.js.org/docs/react/writing-stories/introduction
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UX/Spinner',
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // https://storybook.js.org/docs/react/essentials/controls

} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Style1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Style1.args = {
  loaderStyle: {
    width: '70px',
    height: '70px'
  },
  loaderOuterStyle: {
    border: '4px',
    borderColor: 'purple',
    borderStyle: 'solid',
    borderBottom: "0px",
    borderLeftColor: 'transparent'
  },
  loaderInnerStyle: {
    borderColor: 'black',
    borderTopColor: 'transparent',
    borderRight: '0px',
    borderStyle: 'solid'
  }

};

export const Style2 = Template.bind({});
Style2.args = {
  loaderOuterStyle: {
    borderColor: 'pink',
    borderBottom: "0px",
    borderLeftColor: 'transparent'
  },
  loaderInnerStyle: {
    borderColor: 'orange',
    borderTopColor: 'transparent',
    borderRight: '0px'
  }
};


