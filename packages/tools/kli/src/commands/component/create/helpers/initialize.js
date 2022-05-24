/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { verifyAllDependencies } = require('@/internals/verifyAllDependencies');
const { welcome } = require('@/internals/welcome');
const { existsSync, writeFileSync } = require('fs');
const { resolve, join } = require('path');

const VERBOSE = process.argv.join(' ').includes('--debug');
const SKELETON = process.argv.join(' ').includes('--skeleton');

/**
 * Initialize cli
 */
const initialize = () => {
  if (VERBOSE) {
    console.log(`initialize() argv `, process.argv);
  }

  welcome();

  if (SKELETON) {
    console.log(`
Component sample json input skeleton`);

    const skeleton = {
      name: 'appname',
      component: 'ButtonA',
      port: 8088,
    };

    writeFileSync(join(process.cwd(), 'skeleton.json'), JSON.stringify(skeleton));
    console.log(skeleton);
    process.exit();
  }

  if (process.argv.length < 4) {
    throw new Error('Invalid parameters');
  }

  if (existsSync(resolve(process.argv[3]))) {
    throw new Error(`Error, target existing target directory!`);
  }

  verifyAllDependencies();
};
module.exports = { initialize };
