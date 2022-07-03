/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const path = require('path');

module.exports = {
  context: process.cwd(),
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'store.js',
    library: { name: 'store', type: 'umd' },
  },
  resolve: {
    cacheWithContext: false,
    extensions: ['.ts', '.tsx', '.js'],
  }, 
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
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
    ],
  },
};
