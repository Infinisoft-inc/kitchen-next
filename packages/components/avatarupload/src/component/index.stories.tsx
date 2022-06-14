import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarUpload from '.';
import { defaultAvatar } from './assets';

export default {
  title: 'INPUT/AvatarUpload',
  component: AvatarUpload,
  argTypes: {
    src: {
      defaultValue: '',
      description: '',
      table: {
        type: {
          summary: `src: './'`,
        },
      },
      control: {
        type: 'file',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is an Avatar uploader',
      },
    },
  },
} as ComponentMeta<typeof AvatarUpload>;

const Template: ComponentStory<typeof AvatarUpload> = (args) => (
  <AvatarUpload {...args} />
);

export const SrcArgs = Template.bind({});
SrcArgs.args = {
  src: defaultAvatar,
};

SrcArgs.parameters = {
  docs: {
    description: {
      story: 'Avatar uploader',
    },
  },
};
