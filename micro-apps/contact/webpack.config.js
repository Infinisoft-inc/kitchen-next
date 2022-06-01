/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { merge } = require('webpack-merge');
const common = require('../../dev/config/webpack.common');
const mycommon = require('./webpack.common');
const path = require('path');

module.exports = merge(common, mycommon, {
  mode: 'development',
  devServer: {
    static: path.join(process.cwd(), 'dist'),
    hot: true,
    port: 8080,
  },
  devtool: 'inline-source-map',
});
