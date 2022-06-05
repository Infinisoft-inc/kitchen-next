/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * ------------------------------------------------
 *
 * WORKAROUND
 * This script is a workaround for following issue
 *
 * Requirement
 * Run config update command in each package using lerna
 *
 * Problem
 * Unable to have proper path of running script
 * Nested shell command using backticks are not evaluating command, so impossible to
 * $ kli config update `pwd`
 *
 * Impact
 * Unable to pass config destination path
 *
 * Workaround solution
 * Running this script using nodefrom within package.json.
 */
const { execSync } = require('child_process');
console.log(
  execSync(`yarn run kli config update ${__dirname}`, {
    encoding: 'utf8',
  }),
);
