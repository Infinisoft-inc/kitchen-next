/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { execSync } = require('child_process');

/**
 * Withconsole io
 * @param {string} cmd Execute command
 * @returns
 */
const execIo = (cmd) => {
  execSync(cmd, {
    encoding: 'utf-8',
    stdio: [process.stdin, process.stdout, process.stderr],
  });
};

/**
 * Without console io
 * @param {string} cmd Execute command
 * @returns
 */
const execNoIo = (cmd) =>
  execSync(cmd, { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] });

module.exports = {
  execIo,
  execNoIo,
};
