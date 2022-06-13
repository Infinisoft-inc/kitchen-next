/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { create } = require('./create');
const { remove } = require('./remove');
const { run } = require('./run');
/**
 * Command usage informations
 */
const usage = () => {
  console.log(`
task                                            Tasks are javascript files created under <root>/dev/tasks.
                                                These tasks are meant to be executed in batch by lerna in each package context.
              run             <task>            - Run a javascript task
              create          <task>            - Create a javascript task
              remove          <task>            - delete a javascript task`);
};

module.exports = {
  create,
  remove,
  run,
  usage,
};
