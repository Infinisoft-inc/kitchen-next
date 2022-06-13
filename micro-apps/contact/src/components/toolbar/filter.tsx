/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from "@/context/micro";
import React, { startTransition } from "react";
import { useMetaModel } from "../../hooks/useMetaModel";

const Toggle = React.lazy(() => import(/* webpackChunkName: 'Toggle' */ 'toggle/Toggle'))

const Filter = () => {
  const meta = useMetaModel()
  const [filters, setFilters] = React.useState<API.Meta>();
  const { store } = useMicroContext()

  React.useEffect(() => {
    if (!filters) {
      setFilters(meta?.subCategories)
    }

  }, [filters, meta?.subCategories])


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
    <Toggle toggles={['supplier', 'person', 'organization']} clickHandler={clickHandler} />
  </span>

}

export default Filter
