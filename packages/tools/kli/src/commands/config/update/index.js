const { execIo } = require('@/internals/exec');
const { join, resolve } = require('path');
const { findWorkspaceRootPath } = require('@/internals/findWorkspaceRootPath');
const { pkgDir } = require('@/internals/initialize');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

const update = () => {
  const rootPath = findWorkspaceRootPath('root');
  const configPath = join(rootPath, '/dev/config/');
  const destPath = pkgDir;
  const command = `cp -Ru . ${destPath}`;

  console.log(`
  Config update
  ------------------------------------
  Copying config...`);

  if (VERBOSE) {
    console.log(`source folder = `, configPath);
    console.log(`dest folder = `, destPath);
    console.log(`copy command = `, command);
    console.log(`process.cwd() = `, process.cwd());
  }

  if (!DRYRUN) {
    try {
      process.chdir(configPath);
      execIo(command);
    } catch (error) {
      if (VERBOSE) {
        console.error(error);
      }
    }
  }

  console.log(`
  Complete
  ------------------------------------`);
};

module.exports = {
  update,
};
