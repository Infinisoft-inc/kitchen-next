/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { existsSync, mkdirSync, readdirSync, statSync } = require('fs');
const path = require('path');

/**
 * Recursive directory traversal Visitor pattern
 * @param sourceDir Path to source directory
 * @param visitor   Visitor callback with file path
 */
const traverse = function (sourceDir, visitor) {
  const targetFile = path.resolve(sourceDir);
  if (!existsSync(targetFile)) {
    mkdirSync(targetFile, {
      mode: 0o744,
    });
  }
  const files = readdirSync(targetFile);

  files.filter(f => !f.includes('.git')).forEach(function (file) {
    if (statSync(sourceDir + '/' + file).isDirectory()) {
      traverse(sourceDir + '/' + file, visitor);
    } else {
      visitor?.(path.join(sourceDir, '/', file));
    }
  });
};

module.exports = { traverse };
