/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { exec } = require('@/internals/exec');
const { readFileSync } = require('fs');
const { join } = require('path');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');
const REGISTRY = process.env.REGISTRY || 'https://app.micro.infini-soft.com';
const CLOUDFRONTID = process.env.CLOUDFRONTID || "E351LZG5E36SJZ"

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
      `aws s3 sync dist "s3://${
        pkg?.infinisoft?.moduleFederation?.registry ?? REGISTRY
      }/${pkg.name}" --acl public-read`,
    );
    exec(
      `aws cloudfront create-invalidation --distribution-id ${CLOUDFRONTID} --paths "/${pkg.name}"`,
    );
  }
};

module.exports = { deploy };
