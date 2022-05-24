/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { create } = require('./create');
const { build } = require('./build');
const { deploy } = require('./deploy');
const { use } = require('./use');

/**
 * Command usage informations
 */
const usage = () => {
  console.log(`
component     create          <json input>      - Create new federated component.
              build                             - Build component
              deploy                            - Deploy component on cloud.
              use             <name>            - Add module to container`);};

module.exports = {
  create,
  build,
  deploy,
  use,
  usage,
};
