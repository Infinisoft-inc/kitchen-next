/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { welcome } = require('./welcome');
const { usage } = require('./usage');
const { resolve } = require('path');
const { getCliOptionArgument } = require('@/internals/getCliOptionArgument');
const { tryGetPkg } = require('./tryGetPkg');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');
const HELP = process.argv.join(' ').includes('--help');
const VERSION = process.argv.join(' ').includes('--version');
const TAG_ARGUMENT = getCliOptionArgument('--tag');
const pkg = tryGetPkg(resolve('./', 'package.json'));
const tag = pkg?.infinisoft?.tag;

/**
 * Initialize cli
 */
const initialize = () => {
  welcome();

  if (VERBOSE) {
    console.log(`cli() process.argv, `, process.argv);
    console.log(`./package.json `, pkg);
    console.log(`TAG_ARGUMENT `, TAG_ARGUMENT);
    console.log(`tag `, tag);
  }

  if (HELP) {
    usage();
    process.exit();
  }

  if (VERSION) {
    process.exit();
  }

  if (TAG_ARGUMENT !== undefined && TAG_ARGUMENT !== tag) {
    console.log(
      `Execution out of scope, terminating! (tag inside package.json is not equal to --tag in command executed!)`,
    );
    process.exit();
  }

  if (TAG_ARGUMENT !== undefined) {
    console.log(`Execution scoped to tag ${TAG_ARGUMENT}`);
  }
};

module.exports = {
  initialize,
  VERBOSE,
  DRYRUN,
  HELP,
  VERSION,
  TAG_ARGUMENT,
  tag,
  pkg,
};
