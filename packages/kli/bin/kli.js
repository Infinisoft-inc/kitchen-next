#!/usr/bin/env node
/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const commands = require('./commands');
const { usage } = require('./internals/usage');
const { initialize } = require('./internals/initialize');

const VERBOSE = process.argv.join(' ').includes('--debug');

/**
 * Cli entry point
 */
const cli = () => {
  initialize();

  try {
    const cmd = process.argv[2];
    const sub = process.argv[3];

    commands[cmd][sub]();
  } catch (error) {
    if (VERBOSE) {
      console.error(`Error, `, error);
    }

    usage();
    process.exit();
  }
};

cli();
