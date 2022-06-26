/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import type { Contact } from './contact';
import type { Entity } from './entity';

export type Item = Contact & Entity

export type List = {
  data?: Item[];
  /** Item count */
  total?: number;
  success?: boolean;
};

export type Meta = Record<string, any>;

export type Context = {
  user: Contact
  style: string
}



