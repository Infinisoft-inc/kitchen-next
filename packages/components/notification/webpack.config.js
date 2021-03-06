/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { merge } = require('webpack-merge');
const common = require('../../../dev/config/webpack.common');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const {peerDependencies, name} = require('./package.json')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.join(process.cwd(), 'dist'),
    hot: true,
    port: 8192,
  },
  devtool: 'eval-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      exposes: {
        './NotificationProvider': './src/component',
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
