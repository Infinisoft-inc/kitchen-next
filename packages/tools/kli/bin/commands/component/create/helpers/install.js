/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { chdir } = require('process');
const { exec } = require('./exec');
const { render } = require('mustache');
const { traverse } = require('../../../../internals/traverse');
const {writeFileSync, readFileSync} = require('fs')

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * prompt for answer
 * or
 * unattended
 */
const data = {
  "name": "buttona",
  "component":"ButtonA",
  "import": "./ButtonA",
  "module":"button/ButtonA",
  "port": 8088
}


/**
 * Dependencies installtion
 * @param {string} folder
 */
const install = (folder) => {
  console.log(`
Installing dependencies...
----------------------`);

  if (VERBOSE) {
    console.log(`install() folder `, folder);
  }

  if (!DRYRUN && folder) {
    chdir(folder);

    const visitor = (filepath) => {
      writeFileSync(
        filepath,
        render(readFileSync(filepath).toString('utf-8'), data),
      );
    };

    traverse(folder, visitor);
    exec(`yarn`);
  }
};
module.exports = { install };
