/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { debounce } = require('@/internals/debounce');
const { execIo } = require('@/internals/exec');
const { fswatch } = require('@/internals/fswatch');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const { deploy } = require('../deploy');

const ARGV = process.argv.join(' ');

const VERBOSE = ARGV.includes('--debug');
const DRYRUN = ARGV.includes('--dry-run');
const BUILDENV =
  ARGV.includes('--prod') || ARGV.includes('--analyze') ? 'prod' : 'dev';
const TYPEOUTDIR =
  ARGV.includes('--prod') ? 'dist' : 'dev';

let [TYPESFLAG, TYPESMODE] = ARGV.includes('--types')
  ? [true, ' types']
  : ['', ''];

let [WATCHFLAG, WATCHMODE] = ARGV.includes('--watch')
  ? ['-w', ' watch']
  : ['', ''];

let [DEPLOYFLAG, DEPLOYMODE] = ARGV.includes('--deploy')
  ? [true, ' deploy']
  : ['', ''];

const ANALYZE = ARGV.includes('--analyze') ? ['', ' analyze'] : ['', ''];
const [ANALYZEFLAG, ANALYZEMODE] = ARGV.includes('--analyze-baseline')
  ? ['--env ANALYZEBASELINE=true', ' analyze baseline']
  : ANALYZE;

/**
 * Command runner
 */
const build = async () => {
  console.log(`Building ${BUILDENV} ${TYPESMODE}${WATCHMODE}${DEPLOYMODE}${ANALYZEMODE} mode
-------------------------------------`);
  if (VERBOSE) {
    console.log(`package.json path = `, join(process.cwd(), 'package.json'));
  }

  const debouncedDeploy = () => {
    console.log(`${new Date().toISOString()} Deploying`);
    deploy();
  };

  if (!DRYRUN && WATCHFLAG && TYPESFLAG) {
    execIo(
      `yarn run tsc -p tsconfig.json -d --emitDeclarationOnly --outFile ${TYPEOUTDIR}/types.d.ts --esModuleInterop -w`,
    );
  }

  if (!DRYRUN && WATCHFLAG && DEPLOYFLAG) {
    await fswatch('dist/types.d.ts', (event) => {
      if (VERBOSE) {
        console.log(`watchdeploy event `, event);
      }
      debounce(debouncedDeploy, 2000);
    });
  }

  if (!DRYRUN && !ANALYZEMODE) {
    execIo(
      `yarn run tsc -p tsconfig.json -d --emitDeclarationOnly --outFile ${TYPEOUTDIR}/types.d.ts --esModuleInterop`,
    );
    execIo(`yarn run webpack -c webpack.config.${BUILDENV}.js ${WATCHFLAG}`);
  }

  if (!DRYRUN && ANALYZEMODE) {
    execIo(
      `yarn run tsc -p tsconfig.json -d --emitDeclarationOnly --outFile ${TYPEOUTDIR}/types.d.ts --esModuleInterop`,
    );
    execIo(`yarn run webpack -c webpack.analyze.js ${ANALYZEFLAG}`);

    console.log(`
Completed
---------------------------------------
Bundle stats: ${join(process.cwd(), 'analyze', 'bundle-stats.html')}
Bundle graph:  ${join(process.cwd(), 'analyze', 'deps.graph.htm')}

`);
  }

  const pkg = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json')).toString('utf8'),
  );

  const originalType = readFileSync(
    join(process.cwd(), TYPEOUTDIR, 'types.d.ts'),
  ).toString('utf8');

  const defaultComponent = pkg.infinisoft.moduleFederation.component;

  if (VERBOSE) {
    console.log(`original ${TYPEOUTDIR}/types = `, originalType);
    console.log(
      `transformed ${TYPEOUTDIR}/types = `,
      originalType.replace(
        `declare module "component/index"`,
        `declare module "${pkg.name}/${defaultComponent}"`,
      ),
    );
  }

  if (!DRYRUN) {
    writeFileSync(
      join(process.cwd(), TYPEOUTDIR, 'types.d.ts'),
      originalType.replace(
        `declare module "component/index"`,
        `declare module "${pkg.name}/${defaultComponent}"`,
      ),
    );
  }

  if (!DRYRUN && !ANALYZEMODE && DEPLOYFLAG) {
    console.log(`${new Date().toISOString()} Deploying`);
    deploy();
  }
};

module.exports = { build };
