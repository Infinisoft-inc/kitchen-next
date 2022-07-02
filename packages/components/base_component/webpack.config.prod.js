/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const custom = require('./src/config/custom.webpack.config.prod');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { MinChunkSizePlugin } = require('webpack').optimize;
const moduleFederation = require('./webpack.federation.config');


module.exports = merge(custom, common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'auto'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new MinChunkSizePlugin({
      minChunkSize: 10000, // Minimum number of characters
    }),
    moduleFederation,
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/config/index.html',
    }),
  ],
});
