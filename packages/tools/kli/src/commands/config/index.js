/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const {update} = require('./update');

/**
 * Command usage informations
 */
const usage = () => {
  console.log(`
config        update                            Copies all files from <root>/dev/config into current folder.`);
};

module.exports = {
  update,
  usage
};
