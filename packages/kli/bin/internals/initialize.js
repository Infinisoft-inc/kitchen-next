/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { welcome } = require('./welcome');
const { usage } = require('./usage');

const VERBOSE = process.argv.join(' ').includes('--debug');
const HELP = process.argv.join(' ').includes('--help');
const VERSION = process.argv.join(' ').includes('--version');

/**
 * Initialize cli
 */
const initialize = () => {
  welcome();

  if (VERBOSE) {
    console.error(`cli() process.argv, `, process.argv);
  }

  if (HELP) {
    usage();
    process.exit();
  }

  if (VERSION) {
    process.exit();
  }
};

module.exports = { initialize };
