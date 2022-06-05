/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { name, infinisoft } = require('./package.json');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'index.js',
    library: 'createstore',
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      library: {
        type: 'var',
        name,
      },
      remotes: infinisoft.moduleFederation.dev.remotes,
      exposes: infinisoft.moduleFederation.exposes,
    }),
  ],
});
