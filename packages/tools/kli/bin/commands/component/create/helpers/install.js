/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { chdir } = require('process');
const { exec } = require('./exec');
const { render } = require('mustache');
const { traverse } = require('../../../../internals/traverse');
const { writeFileSync, readFileSync } = require('fs');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Dependencies installtion
 * @param {string} folder
 */
const install = () => {
  console.log(`
Installing dependencies...
----------------------`);
  let inputFile = process.argv[4];
  const inputParameters = JSON.parse(
    readFileSync(inputFile).toString('utf-8'),
  );
  const folder = inputParameters.name

  if (VERBOSE) {
    console.log(`install() folder `, folder);
  }

  if (VERBOSE) {
    console.log(`install() inputParameters `, inputParameters);
  }

  if (!DRYRUN && folder && inputParameters) {
    chdir(folder);

    const visitor = (filepath) => {
      writeFileSync(
        filepath,
        render(readFileSync(filepath).toString('utf-8'), inputParameters),
      );
    };

    traverse(folder, visitor);
    exec(`yarn`);
  }
};
module.exports = { install };
