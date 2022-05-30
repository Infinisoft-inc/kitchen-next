/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { repository, infinisoft } = require('../../../../../package.json');
const { exec } = require('@/internals/exec');
const { join } = require('path');

const REPO_URL = repository.library;
const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Clone git repo
 * @param {string} folder
 */
const clone = ({ name: folder }) => {
  console.log(`
Cloning repo...
----------------------`);

  const basePath = join(process.cwd(), folder);
  const lib = 'mylib';
  if (VERBOSE) {
    console.log(`clone() folder `, folder);
    console.log(`clone() process.cwd()/folder `, basePath);
    console.log(`mv -f ${basePath}/src/name ${basePath}/src/${lib}`);
    console.log(
      `mv ${basePath}/src/${lib}/createstore.ts ${basePath}/src/${lib}/${lib}.ts`,
    );
  }

  if (!DRYRUN && folder) {
    exec(`git clone ${REPO_URL} ${folder}`);
    exec(`mv -f ${basePath}/src/name ${basePath}/src/${lib}`);
    exec(
      `mv ${basePath}/src/${lib}/createstore.ts ${basePath}/src/${lib}/${lib}.ts`,
    );
  }
};
module.exports = { clone };
