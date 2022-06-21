/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export const generateId = () => {
  return Math.round(new Date().getTime() * Math.random());
};
