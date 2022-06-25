/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

// Refactor in lib

import React from "react"
import { IStore } from "./types"

/**
 * Store selector
 * @param store
 * @param selector
 * @returns
 */
type Selector<S, R> = (arg?: S) => R
export type UseStoreGeneric = <S, P, R>(store: IStore<S, P>, selector: Selector<S, R>) => R

export const useStore: UseStoreGeneric = (store, selector) => {
  const _result = React.useSyncExternalStore(
    store.subscribe,
    React.useCallback(() => selector(store?.getState?.()), [store, selector])
  )
  
  return _result
}
