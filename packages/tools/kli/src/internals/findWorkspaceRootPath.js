const { resolve } = require('path');
const { existsSync, readFileSync } = require('fs');
const { VERBOSE } = require('../commands/config/update/index');

const findWorkspaceRootPath = (rootPkgName = 'root') => {
  if (VERBOSE) {
    console.log(
      `
  Config Update
  --------------------------------
  process.cwd() = ${process.cwd()}`,
    );
  }

  for (let i = 0; i < process.cwd().split(/(\\|\/)/g).length; i++) {
    const cwd = resolve(process.cwd(), 'package.json');

    try {
      if (existsSync(cwd)) {
        const pkg = readFileSync(cwd, {
          encoding: 'utf8',
        });
        const jsonpkg = JSON.parse(pkg);
        if (jsonpkg.name === rootPkgName) {
          if (VERBOSE) {
            console.log(`  Found root package.json at path = `, cwd);
          }

          return cwd.replace('package.json', '');
        }
      }
    } catch (err) {
      if (VERBOSE) {
        console.error(`  Not found in ${cwd}`);
      }
    } finally {
      process.chdir('..');
    }
  }
};
exports.findWorkspaceRootPath = findWorkspaceRootPath;
