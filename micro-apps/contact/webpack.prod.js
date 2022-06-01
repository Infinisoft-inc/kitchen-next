/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { merge } = require('webpack-merge');
const common = require('../../dev/config/webpack.common');
const mycommon = require('./webpack.common');

module.exports = merge(common, mycommon, {
  mode: 'production',
});
