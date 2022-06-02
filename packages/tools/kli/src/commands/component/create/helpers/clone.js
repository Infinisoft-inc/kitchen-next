/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { repository } = require('../../../../../package.json');
const { execIo } = require('@/internals/exec');

const REPO_URL = repository.component;
const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Clone git repo
 * @param {string} folder
 */
const clone = ({name: folder}) => {
  console.log(`
Cloning repo...
----------------------`);

  if (VERBOSE) {
    console.log(`clone() folder `, folder);
  }

  if (!DRYRUN && folder) {
    execIo(`git clone ${REPO_URL} ${folder}`);
  }
};
module.exports = { clone };
