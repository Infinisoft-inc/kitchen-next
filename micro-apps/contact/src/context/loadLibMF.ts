/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

type Factory<T> = () => { default: T }

type Container<T> = {
  get: (arg: string) => Promise<Factory<T>>
  init: <A>(arg: A) => Promise<void>
}


export const loadLibMF= async <T,>(scope: any, module: string) => {
  const container = window[scope] as unknown as Container<T>;

  //@ts-ignore
  await container.init(__webpack_share_scopes__.default);

  return container.get(`./${module}`).then(factory => factory().default);
};
