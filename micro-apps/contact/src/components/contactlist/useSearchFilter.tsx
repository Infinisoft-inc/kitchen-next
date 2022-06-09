import { useMicroContext } from "@/context/micro";
import React, { startTransition, useEffect, useSyncExternalStore } from "react";
import config from '../../../config/config.json';

/**
 * Filter store list
 * @returns filtered store list
 */
export const useSearchFilter = () => {
  const { store } = useMicroContext();
  const microState = useSyncExternalStore(store.subscribe, store.getState)
  const [filterTerm, setFilter] = React.useState<string>();
  const [searchTerm, setSearchTerm] = React.useState<string>();


  /**
   * Apply filter
   * @returns Filtered state
   *
   * Same method as search but needs to stay separated.
   * Filter is going to be refactored.
   */
  const applyFilter = () => {

    if (!filterTerm) {
      return microState?.list;
    }
    const result = new Map<string, API.Item>()

    microState?.list?.forEach((item, key) => {
      if (JSON.stringify(item).includes(filterTerm)) {
        result.set(key, item)
      }
    })

    return result;

  }

  /**
   * Search
   * @returns Result
   */
  const search = (list?: Map<string, API.Item>) => {

    if (!searchTerm && !list) {
      return microState?.list;
    }

    if (!searchTerm) {
      return list
    }
    const result = new Map<string, API.Item>()

    list?.forEach((item, key) => {
      if (JSON.stringify(item).includes(searchTerm)) {
        result.set(key, item)
      }
    })

    return result;

  }

  /**
   * Add filter
   */
  useEffect(() => store.subscribe((event, state, payload) => {
    if (typeof payload === 'string') {
      startTransition(() => {
        setFilter(payload)
      })
    }
    if (config.verbose) {
      console.log(`useSearchFilter event/state/payload = `, event, state, payload)
    }
  }, { filter: /(filter.add)/ }), [microState])

  /**
   * Clear filter
   */
  useEffect(() => store.subscribe((event, state, payload) => {
    startTransition(() => {
      setFilter('')
    })
    if (config.verbose) {
      console.log(`useSearchFilter CLEAR = `, event, state, payload)
    }
  }, { filter: /(filter.clear)/ }), [microState])

  /**
 * Search term
 */
  useEffect(() => store.subscribe((event, state, payload) => {
    if (typeof payload === 'string') {
      startTransition(() => {
        setSearchTerm(payload)
      })
    }
    if (config.verbose) {
      console.log(`useSearchFilter  = `, event, state, payload)
    }
  }, { filter: /(search.term)/ }), [microState])

  /**
   *
 * Clear search term
 */
  useEffect(() => store.subscribe((event, state, payload) => {
    startTransition(() => {
      setSearchTerm('')
    })
    if (config.verbose) {
      console.log(`useSearchFilter CLEAR = `, event, state, payload)
    }
  }, { filter: /(search.clear)/ }), [microState])


  return search(applyFilter())
}
