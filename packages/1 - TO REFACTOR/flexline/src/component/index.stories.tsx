import { ComponentMeta, ComponentStory } from '@storybook/react';
import FlexLine from '.';

export default {
  title: 'Layout/FlexLine',
  component: FlexLine,
  argTypes: {

  }
} as ComponentMeta<typeof FlexLine>;

const Template: ComponentStory<typeof FlexLine> = (args) => <FlexLine {...args} />;

export const StringArgs = Template.bind({});
StringArgs.args = {
  left: 'Left',
  right: 'Right'
};

export const LeftRightPropsArgs = Template.bind({});
StringArgs.args = {
  left: 'Left',
  leftProps: {
    style: {flex: 1}
  },
  right: 'Right',
  rightProps:{
    style:{backgroundColor: 'red'}
  }
};

export const JsxArguments = Template.bind({});
JsxArguments.args = {
  left: <>Left</>,
  right: <>Right</>
};

