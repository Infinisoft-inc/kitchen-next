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
  console.log(`component     create          <target>      - Create new federated component to <target> folder.`);
};

module.exports = {
  create,
  usage
};
