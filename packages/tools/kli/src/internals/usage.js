/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

/**
 * Command usage informations
 */
const usage = () => {
  console.log(`
Usage
$ ${process.argv[1]} <commands> <subcommands> [arguments] [--options]

options
--debug                     - Verbose mode
--help                      - Usage
--version                   - Version
--dry-run                   - Simulate the execution without changing anything
--skeleton                  - Console log json skeleton for the command input
--input <json file>         - Customized json skeleton for input
--tag <argument_tag>        - Scoped execution. Execute only if object infinisoft.tag in package.json equals argument_tag
`);
  console.log(`
commands      subcommands     arguments         descriptions
-----------------------------------------------------------------------------------------------------`);
};

module.exports = { usage };
