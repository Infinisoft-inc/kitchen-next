/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { exec } = require('@/internals/exec');
const { readFileSync } = require('fs');
const {join} = require('path')

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

/**
 * Command runner
 */
const deploy = () => {
  if (VERBOSE) {
    console.log(`deploy() `);
  }

  const pkg = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json')).toString('utf8'),
  );

  if (!DRYRUN) {
    exec(
      `aws s3 sync dist "s3://app.micro.infini-soft.com/${pkg.name}" --acl public-read`,
    );
    exec(
      `aws cloudfront create-invalidation --distribution-id E351LZG5E36SJZ --paths "/${pkg.name}"`,
    );
  }
};

module.exports = { deploy };
