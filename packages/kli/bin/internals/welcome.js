/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const {  version } = require('../../package.json');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Welcome banner
 */
const welcome = () => {
  console.log(`
Kitchen Line Interface v${version}
Powered 🚀 by Infinisoft
`);

  if (VERBOSE) {
    console.log(`DEBUG MODE`);
  }

  if (DRYRUN) {
    console.log(`DRY RUN`);
  }
};
module.exports = { welcome };
