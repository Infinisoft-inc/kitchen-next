/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { exec } = require('@/internals/exec');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Command runner
 */
const use = () => {
  if (VERBOSE) {
    console.log(`deploy() `);
  }

  const pkg = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json')).toString('utf-8'),
  );

  let moduleName = process.argv[4];

  if (VERBOSE) {
    console.log(`deploy() modulename = `, moduleName);
    console.log(`deploy() pkg`, pkg);
  }

  if (!DRYRUN) {
    exec(
      `curl "${pkg.infinisoft.moduleFederation.registry}/${moduleName}/types.d.ts" > ${moduleName}.d.ts`,
    );
    pkg.infinisoft.moduleFederation.remotes = Array.from(
      pkg.infinisoft.moduleFederation.remotes,
    ).push({
        moduleName: `${moduleName}@https://app.micro.infini-soft.com/${moduleName}/remoteEntry.js`,
      },
    );

    writeFileSync(join(process.cwd(), 'package.json'), JSON.stringify(pkg))
  }
};

module.exports = { use };
