/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const custom = require('./src/config/custom.webpack.config.dev');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { MinChunkSizePlugin } = require('webpack').optimize;
const moduleFederation = require('./webpack.federation.config');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { MFLiveReloadPlugin } = require('@module-federation/fmr');
const {name, infinisoft} = require('./package.json')

module.exports = merge(custom, common, {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(process.cwd(), 'dev'),
    publicPath: 'auto',
  },
  devServer: {
    static: path.join(process.cwd(), 'dev'),
    hot: false,
    liveReload: true,
    port: infinisoft.moduleFederation.devport
  },
  plugins: [
    new MFLiveReloadPlugin({
      port: infinisoft.moduleFederation.devport,
      container: name,
      standalone: true
    }),
    new ReactRefreshWebpackPlugin(),
    new MinChunkSizePlugin({
      minChunkSize: 10000, // Minimum number of characters
    }),
    moduleFederation,
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/config/index.html',
    }),
  ],
  devtool: 'source-map',
});
