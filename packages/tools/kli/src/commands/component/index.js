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
component     create          <json input>      - Create new federated component
              build                             - Build component dev
                              [--prod]          - Build component prod
                              [--watch]         - Watch mode, rebuild code (without types)
                              [--types]         - Type definition build, can be combined with --watch mode
                              [--deploy]        - Deploy after build, if running in watch mode, deploys every build

              deploy                            - Deploy component on cloud (No build)
              use             <name>            - Add module to container
              remove          <name>            - removes module from container
              `);
};

module.exports = {

  create,
  build,
  deploy,
  use,
  remove,
  usage,
};
