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
const BUILDENV = process.argv.join(' ').includes('--prod') ? 'prod' : 'dev';

/**
 * Command runner
 */
const build = () => {
  console.log(`Building ${BUILDENV} mode...
-----------------------------`)
  if (VERBOSE) {
    console.log(`package.json path = `, join(process.cwd(), 'package.json'));
  }

  if (!DRYRUN) {
    exec(`yarn build:${BUILDENV}`);
  }

  // const pkg = JSON.parse(
  //   readFileSync(join(process.cwd(), 'package.json')).toString('utf8'),
  // );

  // const originalType = readFileSync(
  //   join(process.cwd(), 'dist', 'types.d.ts'),
  // ).toString('utf8');

  // const defaultComponent = pkg.infinisoft.moduleFederation.lib

  // if (VERBOSE) {
  //   console.log(`original dist/types = `, originalType);
  //   console.log(
  //     `transformed dist/types = `,
  //     originalType.replace(
  //       `declare module "component/index"`,
  //       `declare module "${pkg.name}/${defaultLib}"`,
  //     ),
  //   );
  // }

  // if (!DRYRUN) {
  //   writeFileSync(
  //     join(process.cwd(), 'dist', 'types.d.ts'),
  //     originalType.replace(
  //       `declare module "component/index"`,
  //       `declare module "${pkg.name}/${defaultComponent}"`,
  //     )
  //   );
  // }
};

module.exports = { build };
