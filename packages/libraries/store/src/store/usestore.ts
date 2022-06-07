/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React, { useCallback, useSyncExternalStore } from "react";
import { UseStore } from "./types";

/**
 * Store selector
 * @param store
 * @param selector
 * @returns
 */
 export const useStore: UseStore = (store, selector) => {
   return useSyncExternalStore(
     store.subscribe,
     useCallback(() => selector(store.getSnapshot()),[store, selector])
     )
  }
