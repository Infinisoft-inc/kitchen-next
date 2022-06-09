/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const custom = require('./config/custom.webpack.config.dev');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies, name, infinisoft } = require('./package.json');

module.exports = merge(custom, common, {
  mode: 'development',
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      remotes: infinisoft.moduleFederation.dev.remotes,
      exposes: {
        [`./${infinisoft.moduleFederation.component}`]: './src/app',
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './config/index.html',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(process.cwd(), 'dev'),
    publicPath: 'auto',
  },
  devServer: {
    static: path.join(process.cwd(), 'dev'),
    hot: true,
  },
  devtool: 'eval-source-map',
});
