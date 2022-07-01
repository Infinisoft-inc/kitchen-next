#!/usr/bin/env node
/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const commands = require('./commands');
const { usage } = require('./internals/usage');
const { initialize } = require('./internals/initialize');

// const VERBOSE = process.argv.join(' ').includes('--debug');
const cmd = process.argv?.[2];
const sub = process.argv?.[3];
const HELP = process.argv.join(' ').includes('--help') || !cmd || !sub;

/**
 * Cli entry point
 */
const cli = () => {
  initialize();

  if (HELP) {
    usage();
    Object.keys(commands).forEach((k) => {
      commands[k]?.usage?.() ?? '';
    });
    process.exit();
  }

  try {
    // const cmd = process.argv?.[2];
    // const sub = process.argv?.[3];

    commands?.[cmd]?.[sub]?.();
  } catch (error) {
    console.error(`Error, `, error);
    process.exit();
  }
};

cli();
