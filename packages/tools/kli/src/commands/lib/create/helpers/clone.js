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
const clone = ({ name, lib }) => {
  console.log(`
Cloning repo...
----------------------`);

  const basePath = join(process.cwd(), name);

  if (VERBOSE) {
    console.log(`clone() folder `, name);
    console.log(`clone() process.cwd()/folder `, basePath);
    console.log(`mv -f ${basePath}/src/name ${basePath}/src/${name}`);
    console.log(
      `mv ${basePath}/src/${name}/lib.ts ${basePath}/src/${name}/${lib}.ts`,
    );
  }

  if (!DRYRUN && name) {
    exec(`git clone ${REPO_URL} ${name}`);
    exec(`mv -f ${basePath}/src/name ${basePath}/src/${name}`);
    exec(
      `mv ${basePath}/src/${name}/lib.ts ${basePath}/src/${name}/${lib}.ts`,
    );
  }
};
module.exports = { clone };
