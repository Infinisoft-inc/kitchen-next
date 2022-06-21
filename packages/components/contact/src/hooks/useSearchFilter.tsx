import config from '@/config/config.json';
import { useMicroContext } from "@/context/micro";
import React, { startTransition, useEffect, useSyncExternalStore } from "react";

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
    let result = {}

    Object.keys(microState?.list)?.forEach((key) => {
      if (JSON.stringify(microState.list[key])?.includes(filterTerm)) {
        result = { ...result, [key]: microState.list[key] }
      }
    })


    return result;

  }

  /**
   * Search
   * @returns Result
   */
  const search = (list?: Record<string,  Item>) => {

    if (!searchTerm && !list) {
      return microState?.list;
    }

    if (!searchTerm) {
      return list
    }
    let result = {}

    Object.keys(microState?.list)?.forEach((key) => {
      if (JSON.stringify(microState.list[key])?.includes(searchTerm)) {
        result = { ...result, [key]: microState.list[key] }
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
