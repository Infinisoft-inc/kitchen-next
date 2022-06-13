/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { readFileSync } = require('fs');

/**
 * ry to open package.json from path and return it parsed
 * @param {*} path Path to package.json file
 * @returns
 */
const tryGetPkg = (path) => {
  let _pkg;
  try {
    _pkg = JSON.parse(readFileSync(path, { encoding: 'utf8' }));
  } catch (error) { }

  return _pkg;
};
exports.tryGetPkg = tryGetPkg;
