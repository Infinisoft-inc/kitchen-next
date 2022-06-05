/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const {update} = require('./update');

/**
 * Command usage informations
 */
const usage = () => {
  console.log(`
config        update          <target>          - Update config <target> folder`);
};

module.exports = {
  update,
  usage
};
