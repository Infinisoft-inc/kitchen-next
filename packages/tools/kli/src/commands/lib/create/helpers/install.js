/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { chdir } = require('process');
const { execIo } = require('@/internals/exec');
const { render } = require('mustache');
const { traverse } = require('@/internals/traverse');
const { writeFileSync, readFileSync } = require('fs');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Dependencies installtion
 * @param {string} folder
 */
const install = (inputParameters) => {
  console.log(`
Installing dependencies...
----------------------`);

  if (VERBOSE) {
    console.log(`install() inputParameters `, inputParameters);
  }

  if (!DRYRUN && inputParameters) {
    const visitor = (filepath) => {
      writeFileSync(
        filepath,
        render(readFileSync(filepath).toString('utf-8'), inputParameters),
      );
    };

    traverse(inputParameters.name, visitor);
    execIo(`yarn`);
  }
};
module.exports = { install };
