/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

let timer;

export const debounce = (trigger, duration) => () => {
  clearTimeout(timer);
  timer = setTimeout(() => trigger(), duration);
};
