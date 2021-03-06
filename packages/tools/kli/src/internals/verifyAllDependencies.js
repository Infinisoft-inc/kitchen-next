/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { verifyDependency } = require('./verifyDependency');
const { tryRecoverFailure } = require('./tryRecoverFailure');

/**
 * Verify all dependencies
 */
const verifyAllDependencies = () => {
  console.log(`
Verify dependencies...
----------------------
`);
  verifyDependency(
    `yarn -v`,
    /(1.22.*)/g,
    tryRecoverFailure(`echo npm whatever`),
  );

  verifyDependency(
    `node -v`,
    /(18.2.*)/g,
    tryRecoverFailure(`echo install node`),
  );

  verifyDependency(
    `git --version`,
    /(2.*)/g,
    tryRecoverFailure(`echo install node`),
  );
  }
module.exports = { verifyAllDependencies };
