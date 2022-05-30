
/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
export type Snapshot<T> = {
  list: T[];
  item: T | null;
};

/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
export type ICrud<T = unknown> = {
  add: (item: T) => void;
  change: (val: T, predicat: () => T) => void;
  remove: (predicat: () => T) => void;
  edit: (predicat: () => T) => void;
  commit: (item: number) => void;
  clear: () => void;
};

export type IStore<T = unknown> = {
  subscribe: (onStoreChange: () => void) => () => void;
  getSnapshot: () => Snapshot<T>;
  getServerSnapshot?: () => Snapshot<T>;
} & ICrud<T>;

export type Store = <T>(init?: T[] | (() => Promise<T[]>) | undefined) => IStore<T>
