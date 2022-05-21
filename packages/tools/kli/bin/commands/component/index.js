/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const {create} = require('./create');

/**
 * Command usage informations
 */
const usage = () => {
  console.log(`component     create          <json input>      - Create new federated component.`);
};

module.exports = {
  create,
  usage
};
