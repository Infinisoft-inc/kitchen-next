/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { repository, infinisoft } = require('../../../../../package.json');
const { execIo } = require('@/internals/exec');
const { join } = require('path');

const WITHMF = !process.argv.join(' ').includes('--no-mf');
const REPO_URL = WITHMF ? repository.library : repository['library-no-mf'];
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
    execIo(`git clone ${REPO_URL} ${name}`);
  }

  if (!DRYRUN && WITHMF) {
    execIo(`mv -f ${basePath}/src/name ${basePath}/src/${name}`);
    execIo(
      `mv ${basePath}/src/${name}/lib.ts ${basePath}/src/${name}/${lib}.ts`,
    );
  }
};
module.exports = { clone };
