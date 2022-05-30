/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Container } from "./types";

export const load = async <T>(scope: any, module: string) => {
  const container = window[scope] as unknown as Container<T>;

  //@ts-ignore
  await container.init(__webpack_share_scopes__.default);

  return container.get(`./${module}`).then(factory => factory().default);
};

