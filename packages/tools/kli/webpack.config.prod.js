/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  target: 'node',
  mode: 'production',
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: 'kli.js',
    library: "kli"
  },
  resolve: {
    cacheWithContext: false,
    extensions: [".js", ".json"],
    alias: {
      '@/internals': path.resolve(__dirname, 'src/internals/'),
      '@/commands': path.resolve(__dirname, 'src/commands/'),
      '@/*': path.resolve(__dirname, './*'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};
