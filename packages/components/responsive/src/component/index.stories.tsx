import { ComponentMeta, ComponentStory } from '@storybook/react';
import Responsive from '.';

export default {
  title: 'Layout/Responsive',

  component: Responsive,
  argTypes: {
    "showUp": {
      description: `Configure visibility of children components. Will hide below the selected configuration. Example: laptop is selected. Component will show for desktop and uhd ONLY.
      * mobile: always display
      * tablet: show >= width 480px
      * laptop: show >= width 768px
      * desktop: show >= width 1024px
      * uhd: show >= width 1200 px
      `,
      options: ["mobile", "tablet", "laptop", "desktop"],
      control: { type: 'radio' },
    },
    children: { description: 'Children components', control: false },
  },
  parameters: {
    docs: {
      description: {
        component: 'Wrapper component for easy responsiveness. Will hide/show children components based on its configuration.',
      },
    },
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof Responsive>;

const Template: ComponentStory<typeof Responsive> = (args) => (
  <div>
    <h1>Responsive Example</h1>
    <p>Change viewport size and observe behavior</p>

    <Responsive {...args} />
  </div>
);

export const HideMobile = Template.bind({});
HideMobile.args = {
  showUp: 'tablet',
  children: <h4>I will hide on mobile</h4>
};

export const HideMobileTablet = Template.bind({});
HideMobileTablet.args = {
  showUp: 'laptop',
  children: <h2>I will hide on mobile and tablet</h2>
};
export const HideMobileTabletLaptop = Template.bind({});
HideMobileTabletLaptop.args = {
  showUp: 'desktop',
  children: <h2>I will hide on mobile, tablet, laptop</h2>
};
