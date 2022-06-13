/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com

 * Get an option parameter
 * Example:
 * $ kli config update /c/tmp
 * getCliOptionArgument("update") would return /c/tmp
 * @param {*} option to search for
 * @returns parameter or undefined
 */
const getCliOptionArgument = (option) => {
  const paramIndex =
    process.argv.findIndex((p) => p.includes(option));

  return paramIndex < 0 ? undefined :  process.argv?.[paramIndex+1];
};

module.exports = { getCliOptionArgument };
