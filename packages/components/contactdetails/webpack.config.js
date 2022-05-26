/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { merge } = require('webpack-merge');
const common = require('../../../dev/config/webpack.common');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const pkg = require('./package.json')
const {peerDependencies, name}  = pkg

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.join(process.cwd(), 'dist'),
    hot: true,
    port: 8090,
  },
  devtool: 'inline-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name,
      remotes: pkg.infinisoft.moduleFederation.remotes,
      filename: 'remoteEntry.js',
      exposes: {
        './ContactDetails': './src/component',
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
