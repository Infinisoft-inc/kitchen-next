/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { exec } = require('@/internals/exec');
const { readFileSync, writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');
const {onErrorContinue} = require('@/internals/onErrorContinue')

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Command runner
 */
const use = () => {
  if (VERBOSE) {
    console.log(`use() `);
  }

  const pkg = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json')).toString('utf-8'),
  );

  let moduleName = process.argv[4];

  if (VERBOSE) {
    console.log(`use() modulename = `, moduleName);
    console.log(`use() pkg`, pkg);
  }

  if (
    !(
      pkg?.infinisoft?.moduleFederation?.remotes?.hasOwnProperty(moduleName) ??
      false
    ) &&
    pkg.infinisoft.moduleFederation.registry
  ) {
    pkg.infinisoft.moduleFederation.remotes = {
      ...(pkg?.infinisoft?.moduleFederation?.remotes ?? {}),
      [`${moduleName}`]: `${moduleName}@${pkg.infinisoft.moduleFederation.registry}/${moduleName}/remoteEntry.js`,
    };
  }

  if (VERBOSE) {
    console.log(`use() package.json after = `, pkg);
    console.log(`use() remotes = `, pkg.infinisoft.moduleFederation.remotes);
  }

  if (!DRYRUN) {
    onErrorContinue(() => mkdirSync(join(process.cwd(), 'modules')));
    exec(
      `curl "${pkg.infinisoft.moduleFederation.registry}/${moduleName}/types.d.ts" > modules/${moduleName}.d.ts`,
    );

    writeFileSync(join(process.cwd(), 'package.json'), JSON.stringify(pkg));
  }

  console.log(`IMPORTANT
  If you are using webpack watch mode, dev server or hot module reload, it needs to be shutdown and restarted for configuration to be loaded!
  To use component, import it like following:

  const Button = React.lazy(() => import('button/Button'));
  `);
};

module.exports = { use };
