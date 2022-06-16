/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: process.cwd(),

  resolve: {
    cacheWithContext: false,
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@/context/micro': path.resolve(__dirname, 'src/context/micro'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/assets/svg': path.resolve(__dirname, 'src/assets/svg'),
      '@/style': path.resolve(__dirname, 'src/style/theme.module.css'),
      '@/services': path.resolve(__dirname, 'src/services'),
      '@/context': path.resolve(__dirname, 'src/context'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/config': path.resolve(__dirname, 'config'),
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
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
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
