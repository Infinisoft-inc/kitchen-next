/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const custom = require('./config/custom.webpack.config.prod');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies, name, infinisoft } = require('./package.json');

module.exports = merge(custom, common, {
  mode: 'production',
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      remotes: infinisoft.moduleFederation.prod.remotes,
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
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'auto',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
