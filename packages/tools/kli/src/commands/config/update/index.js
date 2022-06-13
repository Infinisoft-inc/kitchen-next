const { execIo } = require('@/internals/exec');
const { join } = require('path');
const { findWorkspaceRootPath } = require('@/internals/findWorkspaceRootPath');
const { getCliOptionArgument } = require('@/internals/getCliOptionArgument');

const VERBOSE = process.argv.join(' ').includes('--debug');
const DRYRUN = process.argv.join(' ').includes('--dry-run');

const update = () => {
  const rootPath = findWorkspaceRootPath('root');
  const configPath = join(rootPath, '/dev/config/');
  const destPath = process.argv[4];
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

  /**
   * Execute command when
   *
   * - NOT dry-run
   * and
   * - no tag or package.json tag is the same as specified in cli
   *
   * Goal is to scope updates by tag
   */
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
