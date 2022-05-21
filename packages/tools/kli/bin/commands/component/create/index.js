/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { clone } = require('./helpers/clone');
const { complete } = require('./helpers/complete');
const { install } = require('./helpers/install');
const { initialize } = require('./helpers/initialize');
const { postInstall } = require('./helpers/post.install');
const { readFileSync } = require('fs');

/**
 * Command runner
 */
const create = () => {
  initialize();

  let inputFile = process.argv[4];
  const inputParameters = JSON.parse(readFileSync(inputFile).toString('utf-8'));

  clone(inputParameters);
  install(inputParameters);
  postInstall(inputParameters);
  complete();
};

module.exports = { create };
