/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { ModuleFederationPlugin } = require('webpack').container;
const { MinChunkSizePlugin } = require('webpack').optimize;
const { dependencies, name, infinisoft } = require('./package.json');

module.exports = (env, argv) =>
  merge(common, {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },

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
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: path.join(process.cwd(), '/analyze/deps.graph.html'),
      }),
      new BundleStatsWebpackPlugin({
        outDir: '../analyze',
        baseline: env.ANALYZEBASELINE || false,
      }),
      new MinChunkSizePlugin({
        minChunkSize: 10000, // Minimum number of characters
      }),
      new HtmlWebpackPlugin({
        template: './config/index.html',
      }),
    ],
  });
