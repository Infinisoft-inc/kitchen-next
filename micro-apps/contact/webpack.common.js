/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { ModuleFederationPlugin } = require('webpack').container;
const CopyPlugin = require("copy-webpack-plugin");
const pkg = require('./package.json')
const deps = pkg.dependencies

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{from: "src/integration", to: "integration"}]
    }),
    new ModuleFederationPlugin({
      name: pkg.name,
      remotes: pkg.infinisoft.moduleFederation.remotes,
      filename: 'remoteEntry.js',
      exposes: {
        './Index': './src/pages/index',
      },
      shared: {
        store: { singleton: true, eager: true },
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
};
