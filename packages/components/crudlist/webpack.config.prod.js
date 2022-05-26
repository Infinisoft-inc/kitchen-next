/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { merge } = require('webpack-merge');
const common = require('../../../dev/config/webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const {peerDependencies, name, infinisoft} = require('./package.json')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new ModuleFederationPlugin({
      name,
      remotes: infinisoft.moduleFederation.remotes,
      filename: 'remoteEntry.js',
      exposes: {
        './CrudList': './src/component',
      },
      shared: {
        ...peerDependencies,
        react: { singleton: true, eager: true, requiredVersion: peerDependencies.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: peerDependencies['react-dom'],
        },
      },
    }),
  ],
});
