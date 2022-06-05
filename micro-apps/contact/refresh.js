const { execSync } = require('child_process');
const pkg = require('./package.json');

Object.keys(pkg.infinisoft.moduleFederation.dev.remotes).forEach((k) => {
  console.log(
    execSync(`yarn run kli component use ${k}`, { encoding: 'utf8' }),
  );
});

console.log(execSync(`yarn run kli lib use store`, { encoding: 'utf8' }));
