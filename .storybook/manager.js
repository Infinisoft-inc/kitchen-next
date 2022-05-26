// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import infiniTheme from './InfinisoftTheme'

addons.setConfig({
  theme: infiniTheme
});
