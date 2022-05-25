/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { readFileSync, writeFileSync, rmSync } = require('fs');
const { join } = require('path');
const {onErrorContinue} = require('@/internals/onErrorContinue')

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Command runner
 */
const remove = () => {
  if (VERBOSE) {
    console.log(`remove() `);
  }

  const pkg = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json')).toString('utf-8'),
  );

  let moduleName = process.argv[4];

  if (VERBOSE) {
    console.log(`remove() modulename = `, moduleName);
    console.log(`remove() pkg`, pkg);
  }

  if (pkg?.infinisoft?.moduleFederation?.remotes?.hasOwnProperty(moduleName)) {
    delete pkg.infinisoft.moduleFederation.remotes[moduleName]
  }

  if (VERBOSE) {
    console.log(`remove() package.json after = `, pkg);
    console.log(`remove() remotes = `, pkg.infinisoft.moduleFederation.remotes);
  }

  if (!DRYRUN) {
      onErrorContinue(()=>rmSync(join(process.cwd(), 'modules', `${moduleName}.d.ts`)));
      onErrorContinue(()=>writeFileSync(join(process.cwd(), 'package.json'), JSON.stringify(pkg)))
  }

  console.log(`IMPORTANT
  If you are using webpack watch mode, dev server or hot module reload, it needs to be shutdown and restarted for configuration to be unloaded!`)
};

module.exports = { remove };
