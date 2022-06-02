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
const deps = pkg.peerDependencies


module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.join(process.cwd(), 'dist'),
    hot: true,
    port: 8082,
  },
  devtool: 'inline-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: pkg.name,
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/component',
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
});
