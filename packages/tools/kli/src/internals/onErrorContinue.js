/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const onErrorContinue = (callback) => {
  try {
    callback?.();
  } catch (erro) {}
};

module.exports = { onErrorContinue };
