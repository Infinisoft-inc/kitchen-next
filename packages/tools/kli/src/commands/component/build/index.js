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
const build = () => {
  if (VERBOSE) {
    console.log(`package.json path = `, join(process.cwd(), 'package.json'));
  }

  if (!DRYRUN) {
    exec(`yarn build:dev`);
  }

  const pkg = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json')).toString('utf8'),
  );

  const originalType = readFileSync(
    join(process.cwd(), 'dist', 'types.d.ts'),
  ).toString('utf8');

  const defaultComponent = originalType
    .match(/export default.*;/)[0]
    .split(' ')
    .reverse()[0]
    .replace(';', '');

  if (VERBOSE) {
    console.log(`original dist/types = `, originalType);
    console.log(
      `transformed dist/types = `,
      originalType.replace(
        `declare module "component/index"`,
        `declare module "${pkg.name}/${defaultComponent}"`,
      ),
    );
  }

  if (!DRYRUN) {
    writeFileSync(
      join(process.cwd(), 'dist', 'types.d.ts'),
      originalType.replace(
        `declare module "component/index"`,
        `declare module "${pkg.name}/${defaultComponent}"`,
      ),
    );
  }
};

module.exports = { build };
