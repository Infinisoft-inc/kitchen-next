/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { findWorkspaceRootPath } = require('@/internals/findWorkspaceRootPath');
const { resolve } = require('path');
const { writeFileSync } = require('fs');
const { getCliOptionArgument } = require('@/internals/getCliOptionArgument');
const { VERBOSE, DRYRUN } = require('@/internals/initialize');
const { execSync } = require('child_process');



const taskTemplate = `
/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * TASK
 */

const { resolve, join } = require('path');
const { readFileSync, writeFileSync } = require('fs');

(_cwd) => {

const tryGetPkg = (_path) => {
  let _pkg;
  try {
    _pkg = JSON.parse(readFileSync(_path, { encoding: 'utf8' }));
  } catch (error) { }

  return _pkg;
};

const pkgDir = resolve(_cwd);
const pkgFilename = join(pkgDir, 'package.json');
const pkg = tryGetPkg(pkgFilename);

console.log(\`pkg \`, pkg)
console.log(\`pkgDir \`, pkgDir)
console.log(\`pkgFilename \`, pkgFilename)


console.log(\`New Task\`)
}


`


/**
 * Create new task
 */
const create = () => {
  const taskName = getCliOptionArgument('create');
  const rootPath = findWorkspaceRootPath('root');
  const taskFile = resolve(rootPath, 'dev', 'tasks', `${taskName}.js`);

  console.log(`
Creating task ${taskName}
--------------------------
`);

  if (VERBOSE) {
    console.log(`taskName `, taskName);
    console.log(`rootPath `, rootPath);
    console.log(`taskFile `, taskFile);
  }

  if (!DRYRUN) {
    writeFileSync(taskFile, taskTemplate);
    execSync(taskFile);
  }

  console.log(`Completed`);
};

module.exports = { create };
