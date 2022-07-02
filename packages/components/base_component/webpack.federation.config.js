/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { ModuleFederationPlugin } = require('webpack').container;
const {peerDependencies, name, infinisoft} = require('./package.json')

module.exports = new ModuleFederationPlugin({
  name,
  filename: 'remoteEntry.js',
  remotes: infinisoft.moduleFederation.dev.remotes,
  exposes: {
    [`./${infinisoft.moduleFederation.component}`]: `./src/component`,
  },
  shared: {
    ...peerDependencies,
    react: { eager: true,requiredVersion: peerDependencies.react },
    'react-dom': {
      eager:true, 
      requiredVersion: peerDependencies['react-dom'],
    },
  },
})
