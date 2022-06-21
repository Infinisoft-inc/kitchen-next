/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import type { Contact, Entity } from '../../../../common/src';

export type Item = Contact & Entity

export type List = {
  data?: Item[];
  /** Item count */
  total?: number;
  success?: boolean;
};

export type Meta = Record<string, any>;
