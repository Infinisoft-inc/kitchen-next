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
type Selector<S, R> = (arg: S) => R
type UseStoreGeneric = <S, P, R>(store: Store<S, P>, selector: Selector<S, R>) => R

export const useStore = <S, P, R>(store: Store<S, P>, selector: Selector<S, R>) => {
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [store, selector])
  )
}
