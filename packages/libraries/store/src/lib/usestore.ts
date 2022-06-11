/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { useCallback, useSyncExternalStore } from "react"
import { IStore } from "../types"

/**
 * Store selector
 * @param store
 * @param selector
 * @returns
 */
type Selector<S, R> = (arg: S) => R
type UseStoreGeneric = <S, P, R>(store: IStore<S, P>, selector: Selector<S, R>) => R

export const useStore: UseStoreGeneric = (store, selector) => {
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()!), [store, selector])
  )
}
