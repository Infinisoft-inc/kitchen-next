
/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type Factory<T> = () => { default: T }

export type Container<T> = {
  get: (arg: string) => Promise<Factory<T>>
  init: <A>(arg: A) => Promise<void>
}
