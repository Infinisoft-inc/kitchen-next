/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { execNoIo } = require("@/internals/exec");

const VERBOSE = process.argv.join(' ').includes('--debug');

/**
 * Try to recover failure
 * @param {string} cmd Onfailure execute function
 * @returns
 */
const tryRecoverFailure = (cmd) => () => {
  if (VERBOSE) {
    console.log(`tryRecovery failure: `, cmd);
  }

  try {
    execNoIo(cmd);
    return [true, ` installed with: ${cmd}`];
  } catch (error) {
    if (VERBOSE) {
      console.debug(`tryRecovery error: `, error);
    }
    console.error(`Critical error, exiting!`);
    process.exit();
  }
};

module.exports = {tryRecoverFailure
}
