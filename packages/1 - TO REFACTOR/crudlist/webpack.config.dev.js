/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const custom = require('./config/custom.webpack.config.dev');
const path = require('path');
const {infinisoft} = require('./package.json')

module.exports = merge(custom, common, {
  mode: 'development',
  devServer: {
    static: path.join(process.cwd(), 'dist'),
    hot: true,
    port: infinisoft.devserver.port,
  },
  devtool: 'inline-source-map',
});
