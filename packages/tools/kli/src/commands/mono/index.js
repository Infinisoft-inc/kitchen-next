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
  console.log(`mono          create          <target>          - Create new monorepo to <target> folder.`);
};

module.exports = {
  create,
  usage
};
