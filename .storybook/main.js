const {
  withStorybookModuleFederation,
} = require('storybook-module-federation');

module.exports = withStorybookModuleFederation({
  name: 'storybook',
  remotes: {
    contactdetails:
      'contactdetails@https://app.micro.infini-soft.com/contactdetails/remoteEntry.js',
    flexcol: 'flexcol@https://app.micro.infini-soft.com/flexcol/remoteEntry.js',
    flexline:
      'flexline@https://app.micro.infini-soft.com/flexline/remoteEntry.js',
    inputtext:
      'inputtext@https://app.micro.infini-soft.com/inputtext/remoteEntry.js',
    store: 'store@https://app.micro.infini-soft.com/store/remoteEntry.js',
  },
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
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/*.stories.mdx',
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
