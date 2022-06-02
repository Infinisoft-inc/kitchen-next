/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { execIo } = require('@/internals/exec');
const { join } = require('path');

const ARGV = process.argv.join(' ');

const VERBOSE = ARGV.includes('--debug');
const DRYRUN = ARGV.includes('--dry-run');
const BUILDENV =
  ARGV.includes('--prod') || ARGV.includes('--analyze') ? 'prod' : 'dev';
let WATCH = ARGV.includes('--watch-deploy')
  ? ['-w', ' watch deploy', true]
  : ['', '', false];
[WATCHFLAG, WATCHMODE, WATCHDEPLOY] = ARGV.includes('--watch-no-deploy')
  ? ['-w', 'watch without deploy', false]
  : WATCH;
const ANALYZE = ARGV.includes('--analyze') ? ['', ' analyze'] : ['', ''];
const [ANALYZEFLAG, ANALYZEMODE] = ARGV.includes('--analyze-baseline')
  ? ['--env ANALYZEBASELINE=true', ' analyze baseline']
  : ANALYZE;

/**
 * Command runner
 */
const build = () => {
  console.log(`Building ${BUILDENV} ${WATCHMODE}${ANALYZEMODE} mode
-------------------------------------`);
  if (VERBOSE) {
    console.log(`package.json path = `, join(process.cwd(), 'package.json'));
  }

  if (!DRYRUN && !ANALYZEMODE) {
    execIo(
      `yarn run tsc -p tsconfig.json -d --emitDeclarationOnly --outFile dist/types.d.ts --esModuleInterop`,
    );
    execIo(`yarn run webpack -c webpack.config.${BUILDENV}.js ${WATCHFLAG}`);
  }

  if (!DRYRUN && ANALYZEMODE) {
    execIo(
      `yarn run tsc -p tsconfig.json -d --emitDeclarationOnly --outFile dist/types.d.ts --esModuleInterop`,
    );
    execIo(`yarn run webpack -c webpack.analyze.js ${ANALYZEFLAG}`);

    console.log(`
Completed
---------------------------------------
Bundle stats: ${join(process.cwd(), 'analyze', 'bundle-stats.html')}
Bundle graph:  ${join(process.cwd(), 'analyze', 'deps.graph.htm')}

`);
  }
};

module.exports = { build };
