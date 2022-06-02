const {
  withStorybookModuleFederation,
} = require('storybook-module-federation');
const pkg = require('../package.json')

module.exports = withStorybookModuleFederation({
  name: 'storybook',
  remotes: pkg.infinisoft.moduleFederation.remotes,
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      eager: true,
    },
  },
})({
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/components/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  features: {
    previewMdx2: true,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      experiments: {
        topLevelAwait: true,
      },
    };
  },
});
