/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { readFileSync } = require('fs');
const { findWorkspaceRootPath } = require('@/internals/findWorkspaceRootPath');
const { resolve } = require('path');
const { getCliOptionArgument } = require('@/internals/getCliOptionArgument');
const { VERBOSE, DRYRUN } = require('@/internals/initialize');

/**
 * Run new task
 */
const run = () => {
  const cwd = resolve('.');
  const taskName = getCliOptionArgument('run');
  const rootPath = findWorkspaceRootPath('root');
  const taskFile = resolve(rootPath, 'dev', 'tasks', `${taskName}.js`);

  console.log(`
Running task ${taskName}
--------------------------
`);

  if (VERBOSE) {
    console.log(`cwd `, cwd);
    console.log(`taskName `, taskName);
    console.log(`rootPath `, rootPath);
    console.log(`taskFile `, taskFile);
  }

  if (!DRYRUN) {
    const task = eval(readFileSync(taskFile, { encoding: 'utf8' }));
    task(cwd);
  }

  console.log(`
--------------------------
Completed`);
};

module.exports = { run };
