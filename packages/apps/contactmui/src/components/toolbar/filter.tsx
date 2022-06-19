/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from "@/context/micro";
import React, { startTransition, useSyncExternalStore } from "react";

const Toggle = React.lazy(() => import(/* webpackChunkName: 'Toggle' */ 'toggle/Toggle'))

export type FilterSources = "contact" | "meta"
export type FilterProps = {
  source: FilterSources
}

const Filter = ({source}: FilterProps) => {
  const { store } = useMicroContext()
  const state = useSyncExternalStore(store.subscribe, store.getState)

  const subCategories = state?.meta?.categories ? Object.keys(state.meta.categories) : []

  const clickHandler = (newValue?: string) => {
    startTransition(() => {
      if (newValue !== 'none') {
        store.emit(`${source}.filter.add`, newValue)
      }
      else {
        store.emit(`${source}.filter.clear`)
      }
    })
  }

  return <span data-style='filter:container:root'>
    {subCategories && <Toggle toggles={['none', ...subCategories]} clickHandler={clickHandler} />}
  </span>

}

export default Filter
