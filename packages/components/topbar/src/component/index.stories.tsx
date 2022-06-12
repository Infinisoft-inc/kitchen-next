import { ComponentMeta, ComponentStory } from '@storybook/react';
import Responsive from "responsive/Responsive";
import TopBar from '.';
import { defaultAvatar } from './assets';
import css from './index.module.css';

const COMPONENT = "TopBar"

const Menu = () => <div>
  <Responsive showUp='laptop'>
    <ul className={css.item}>
      <ol>Accouting</ol>
      <ol>Operations</ol>
      <ol className={css.myProfile}>
        <img className={css.profilImage} src={defaultAvatar} />
        Martin Ouimet
      </ol>
    </ul>
  </Responsive>

</div>

export default {
  title: 'TEMPLATE/TopBar',
  component: TopBar,
  argTypes: {
    overrideTokens: { description: 'Enable/Disable token overrides', default: false },
    "background-color": {
      description: 'Background color, must enable overrideTokens',
      table: {
        type: {
          summary: `DSP Token --${COMPONENT.toLowerCase()}-background-color`,
        },
      }

    },
    "color": {
      description: 'Color, must enable overrideTokens',
      table: {
        type: {
          summary: `DSP Token --${COMPONENT.toLowerCase()}-color`,
        },
      }
    },
    brandComponent: { description: 'Brand Image Component Override', control: false },
    menuComponent: { description: 'Menu Component Override', control: false },
    brandImageUrl: { description: 'Brand image url', control: { type: 'file', accept: '.png' }, name: 'Brand image Url' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Topbar component',
      },
    },
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = (args) => (
    <TopBar {...args} />
  );


export const BrandImageURL = Template.bind({});
BrandImageURL.args = {
  overrideTokens: true,
  "background-color": 'black',
  color: 'white',
  brandImageUrl: "https://www.kitchen.infini-soft.com/assets/infinisoftticon.png",
  menuComponent: <Menu />
};

export const BrandComponentOverride = Template.bind({});
BrandComponentOverride.args = {
  overrideTokens: true,
  "background-color": 'black',
  color: 'white',
  brandComponent: <div>Override</div>,
  menuComponent: <Menu />
};
