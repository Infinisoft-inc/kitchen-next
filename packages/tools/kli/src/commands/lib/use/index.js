/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { execIo } = require('@/internals/exec');
const { readFileSync, writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');
const { onErrorContinue } = require('@/internals/onErrorContinue');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');
const TYPE = "libraries"

/**
 * Command runner
 */
const use = () => {

  if (VERBOSE) {
    console.log(`use() `);
  }

  let pkg = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json')).toString('utf-8'),
  );

  let moduleName = process.argv[4];
  console.log(`Configuring ${moduleName}, one moment...
--------------------------------------------`);



  if (VERBOSE) {
    console.log(`use() modulename = `, moduleName);
    console.log(`use() pkg`, pkg);
  }

  const REGISTRY =
    pkg?.infinisoft?.moduleFederation?.registry ??
    'https://app.micro.infini-soft.com';

  if (
    !(
      pkg?.infinisoft?.moduleFederation?.remotes?.hasOwnProperty(moduleName) ??
      false
    )
  ) {

    pkg = {
      ...pkg,
      infinisoft: {
        ...pkg?.infinisoft,
        moduleFederation: {
          ...pkg?.infinisoft?.moduleFederation,
          remotes: {
            ...(pkg?.infinisoft?.moduleFederation?.remotes ?? {}),
            [`${moduleName}`]: `${moduleName}@${REGISTRY}/${TYPE}/${moduleName}/remoteEntry.js`,
          },
        },
      },
    };
  }

  if (VERBOSE) {
    console.log(`use() package.json after = `, pkg);
    console.log(`use() remotes = `, pkg.infinisoft.moduleFederation.remotes);
  }

  if (!DRYRUN) {
    onErrorContinue(() => mkdirSync(join(process.cwd(), 'modules')));
    execIo(
      `curl "${REGISTRY}/${TYPE}/${moduleName}/types.d.ts" > modules/${moduleName}.d.ts`,
    );

    writeFileSync(join(process.cwd(), 'package.json'), JSON.stringify(pkg));
  }

  console.log(`
  IMPORTANT
  ---------
  If you are using webpack watch mode, dev server or hot module reload, it needs to be shutdown and restarted for configuration to be loaded!
  To use component, import it like following:

  Import / Usage / Typescript
  --------
  import(/* webpackPreload: true */ 'libuniqueid/mylib')
  const mylib = await load<Function>('libuniqueid', 'mylib')
  mylib()

  Import / Usage / Javascript
  --------
  import(/* webpackPreload: true */ 'libuniqueid/mylib')
  const mylib = await load('libuniqueid', 'mylib')
  mylib()


  Completed
  ---------
  Library ready to use
  Powered 🚀 by Infinisoft Inc.
  Happy ☠️  Hacking
  `);
};

module.exports = { use };
