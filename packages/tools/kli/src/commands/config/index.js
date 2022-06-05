/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const {checksum} = require('./checksum');
const {update} = require('./update');

/**
 * Command usage informations
 */
const usage = () => {
  console.log(`
config        update          <target>          - Update config <target> folder

              rollback        <target>          - Rollback to last config
              checksum        <file>            - Compute <target> file checksum.`);
};

module.exports = {
  checksum,
  update,
  usage
};
