/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { watch } = require('node:fs/promises');

const ac = new AbortController();
const { signal } = ac;

/**
 * Watch target and trigger onevent
 * @param {*} target File or folder
 * @param {*} trigger Event handler
 */

const VERBOSE = process.argv.join(' ').includes('--debug');

export const fswatch = async (target, trigger) => {
  try {
    const watcher = watch(target, { signal });

    for await (const event of watcher) {
      if (VERBOSE) {
        console.log(event);
      }

      trigger(event);
    }
  } catch (err) {
    if (err.name === 'AbortError') return;
    throw err;
  }
};
