/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require("terser-webpack-plugin"); // Issue with module federation
// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const {name, infinisoft, peerDependencies} = require('./package.json')

module.exports = {
  context: process.cwd(),
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'createstore',
    publicPath: 'auto',
  },
  resolve: {
    cacheWithContext: false,
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-env'],
            plugins: ['lodash'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      library: { type: 'var', name },
      exposes: {
        './createstore': './src/store/createstore',
      },

    }),
  ],
};
