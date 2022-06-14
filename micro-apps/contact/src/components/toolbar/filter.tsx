/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from "@/context/micro";
import React, { startTransition, useSyncExternalStore } from "react";

const Toggle = React.lazy(() => import(/* webpackChunkName: 'Toggle' */ 'toggle/Toggle'))

const Filter = () => {
  const { store } = useMicroContext()
  const state = useSyncExternalStore(store.subscribe, store.getState)
  const subCategories = state?.meta?.categories ? Object.keys(state.meta.categories) : []

  const clickHandler = (newValue?: string) => {
    startTransition(() => {
      if (newValue !== 'none') {
        store.emit('filter.add', newValue)
      }
      else {
        store.emit('filter.clear')
      }
    })
  }

  return <span data-style='filter:container:root'>
    {subCategories && <Toggle toggles={subCategories} clickHandler={clickHandler} />}
  </span>

}

export default Filter
