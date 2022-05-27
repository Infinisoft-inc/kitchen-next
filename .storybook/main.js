// const { ModuleFederationPlugin } = require('webpack').container;
const {
  withStorybookModuleFederation,
} = require('storybook-module-federation');

// module.exports =

const config = {
   stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/*.stories.mdx'
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
    // storyStoreV7: true,
  },
};


module.exports =  withStorybookModuleFederation({
        name:'storybook',
        remotes: {
          contactdetails:
            'contactdetails@https://app.micro.infini-soft.com/contactdetails/remoteEntry.js',
          flexcol:
            'flexcol@https://app.micro.infini-soft.com/flexcol/remoteEntry.js',
          flexline:
            'flexline@https://app.micro.infini-soft.com/flexline/remoteEntry.js',
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            // requiredVersion: storybookConfig?.packageJson?.peerDependencies?.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            // requiredVersion: storybookConfig.packageJson?.peerDependencies?.['react-dom'],
          },
        },
      })(config)
