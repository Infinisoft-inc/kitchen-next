/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { join, resolve } = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/server.jsx',
  output: {
    path: join(process.cwd(), 'server'),
  },
  target: 'node',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './index.html',
  //   })
  // ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', {runtime: "classic"}],
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
