/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { findWorkspaceRootPath } = require('@/internals/findWorkspaceRootPath');
const { resolve } = require('path');
const { rmSync } = require('fs');
const { getCliOptionArgument } = require('@/internals/getCliOptionArgument');
const { VERBOSE, DRYRUN } = require('@/internals/initialize');

/**
 * Remove new task
 */
const remove = () => {
  const taskName = getCliOptionArgument('remove');
  const rootPath = findWorkspaceRootPath('root');
  const taskFile = resolve(rootPath, 'dev', 'tasks', `${taskName}.js`);

  console.log(`
Removing task ${taskName}
--------------------------
`);

  if (VERBOSE) {
    console.log(`taskName `, taskName);
    console.log(`rootPath `, rootPath);
    console.log(`taskFile `, taskFile);
  }

  if (!DRYRUN) {
    rmSync(taskFile);
  }

  console.log(`Completed`);
};

module.exports = { remove };
