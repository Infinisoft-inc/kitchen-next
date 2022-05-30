/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { create } = require('./create');
const { build } = require('./build');
const { deploy } = require('./deploy');
const { use } = require('./use');
const { remove } = require('./remove');

/**
 * Command usage informations
 */
const usage = () => {
  console.log(`
library     create          <json input>      - Create new federated library.
              build                             - Build library dev
                              [--prod]          - Build library prod
              deploy                            - Deploy library on cloud.
              use             <name>            - Add module to container
              remove          <name>            - removes module from container`);
};

module.exports = {
  create,
  build,
  deploy,
  use,
  remove,
  usage,
};
