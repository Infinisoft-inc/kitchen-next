/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { verifyAllDependencies } = require('@/internals/verifyAllDependencies');
const { welcome } = require('@/internals/welcome');
const { existsSync } = require('fs');
const { resolve } = require('path');

const VERBOSE = process.argv.join(' ').includes('--debug');

/**
 * Initialize cli
 */
const initialize = () => {
  if (VERBOSE) {
    console.log(`initialize() argv `, process.argv);
  }

  welcome();

  if (process.argv.length < 4) {
    throw new Error('Invalid parameters')
  }

  if (existsSync(resolve(process.argv[3]))) {
    throw new Error(`Error, target existing target directory!`);
  }

  verifyAllDependencies();
};
module.exports = { initialize };
