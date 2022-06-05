/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */



module.exports = {
  context: process.cwd(),
  entry: './src/index.ts',
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
  }
};
