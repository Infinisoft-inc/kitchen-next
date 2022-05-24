/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { resolve } = require('path');
const { clone } = require('./helpers/clone');
const { complete } = require('./helpers/complete');
const { install } = require('./helpers/install');
const { initialize } = require('./helpers/initialize');
const { postInstall } = require('./helpers/post.install');

/**
 * Command runner
 */
const create = () => {
  initialize();
  const targetDir = resolve(process.argv[4]);

  clone(targetDir);
  install(targetDir);
  postInstall(targetDir);
  complete();
};

module.exports = { create };
