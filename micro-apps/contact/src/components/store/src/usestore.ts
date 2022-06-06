/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { useCallback, useSyncExternalStore } from "react"
import { Store } from "../types"

/**
 * Store selector
 * @param store
 * @param selector
 * @returns
 */
type Selector<S> = (arg: S) => any
export const useStore = <S, P>(store: Store<S, P>, selector: Selector<S>) => {
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [store, selector])
  )
}
