/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");
const common = require('./webpack.common');
const { infinisoft } = require('./package.json');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { name, infinisoft } = require('./package.json');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
      remotes: infinisoft.moduleFederation.prod.remotes,
      exposes: infinisoft.moduleFederation.exposes,
    }),
  ],
});
