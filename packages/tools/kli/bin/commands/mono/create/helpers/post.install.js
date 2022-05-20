/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { exec } = require('./exec');
const { join } = require('path');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Dependencies installtion
 * @param {string} folder
 */
const postInstall = (folder) => {
  console.log(`
Post installation...
----------------------`);

  if (VERBOSE) {
    console.log(`postInstall() folder `, folder);
  }

  if (!DRYRUN && folder) {
    exec(`rm -rf ${join(folder, '.git')}`);
    exec(`git init ${folder}`);
  }
};
module.exports = { postInstall };