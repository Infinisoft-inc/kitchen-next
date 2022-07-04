/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    cacheWithContext: false,
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@/config': path.resolve(__dirname, 'src/config'),
      '@/component': path.resolve(__dirname, 'src/component'),
      '@/assets': path.resolve(__dirname, 'src/component/assets'),
      '@/presets': path.resolve(__dirname, 'src/component/presets'),
      '@/subcomponents': path.resolve(__dirname, 'src/component/subcomponents'),
      '@/style': path.resolve(__dirname, 'src/component/style'),
      '@/context': path.resolve(__dirname, 'src/core/context'),
      '@/core': path.resolve(__dirname, 'src/core'),
      '@/hooks': path.resolve(__dirname, 'src/core/hooks'),
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
            // plugins: ['lodash', 'react-refresh/babel'],
          },
        },
        exclude: /(node_modules|\*.stories.\*)/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(process.cwd(), 'src'),
        exclude: /(node_modules|\*.stories.\*)/,
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
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        include: path.resolve(process.cwd(), 'src'),
        exclude: /(node_modules|\*.stories.\*)/,
        type: 'asset/resource',
      },
    ],
  },
};
