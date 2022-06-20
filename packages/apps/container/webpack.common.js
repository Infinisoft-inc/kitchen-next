/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const {peerDependencies, name, infinisoft} = require('./package.json')

module.exports = {
  context: process.cwd(),
   resolve: {
    cacheWithContext: false,
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@/context/micro': path.resolve(__dirname, 'src/context/micro'),
      '@/component': path.resolve(__dirname, 'src/component'),
      '@/assets/svg': path.resolve(__dirname, 'src/assets/svg'),
      '@/style': path.resolve(__dirname, 'src/style/theme.module.css'),
      '@/services': path.resolve(__dirname, 'src/services'),
      '@/context': path.resolve(__dirname, 'src/context'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/config': path.resolve(__dirname, 'config'),
      '@/helpers': path.resolve(__dirname, 'src/helpers'),
      '@/packages': path.resolve(__dirname, 'src/packages'),
      '@/router': path.resolve(__dirname, 'src/router'),
      '@/app': path.resolve(__dirname, 'src/app'),
    },
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
            plugins: ['lodash'],
          },
        },
        exclude: /(node_modules|\*.stories.\*)/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(process.cwd(), 'src'),
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(process.cwd(), 'src'),
        exclude: /node_modules/,
        type: 'asset/resource',
      },
    ],
  },
};
