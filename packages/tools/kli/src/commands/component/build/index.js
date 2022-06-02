/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { exec } = require('@/internals/exec');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const ARGV = process.argv.join(' ');

const VERBOSE = ARGV.includes('--debug');
const DRYRUN = ARGV.includes('--dry-run');
const BUILDENV = ARGV.includes('--prod') || ARGV.includes('--analyze') ? 'prod' : 'dev';
let WATCH = ARGV.includes('--watch-deploy') ? ['-w', ' watch deploy'] : ['', ''];
[WATCHFLAG, WATCHMODE] = ARGV.includes('--watch-no-deploy')
  ? ['-w', 'watch without deploy']
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
    exec(
      `yarn run tsc -p tsconfig.json -d --emitDeclarationOnly --outFile dist/types.d.ts --esModuleInterop`,
    );
    exec(`yarn run webpack -c webpack.config.${BUILDENV}.js ${WATCHFLAG}`);
  }

  if (!DRYRUN && ANALYZEMODE) {
    exec(
      `yarn run tsc -p tsconfig.json -d --emitDeclarationOnly --outFile dist/types.d.ts --esModuleInterop`,
    );
    exec(`yarn run webpack -c webpack.analyze.js ${ANALYZEFLAG}`);

    console.log(`
Completed
---------------------------------------
Bundle stats: ${join(process.cwd(), 'analyze', 'bundle-stats.html')}
Bundle graph:  ${join(process.cwd(), 'analyze', 'deps.graph.htm')}

`)
  }

  const pkg = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json')).toString('utf8'),
  );

  const originalType = readFileSync(
    join(process.cwd(), 'dist', 'types.d.ts'),
  ).toString('utf8');

  const defaultComponent = pkg.infinisoft.moduleFederation.component;

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
