import React, { startTransition, useEffect, useSyncExternalStore } from "react";
import config from "../../../config/config.json";
import { useMicroContext } from "../../context/micro";

/**
 * Filter store list
 * @returns filtered store list
 */
export const useSearchFilter = () => {
  const { store } = useMicroContext();
  const microState = useSyncExternalStore(store.subscribe, store.getSnapshot)
  const [filterTerm, setFilter] = React.useState<string>();
  const [searchTerm, setSearchTerm] = React.useState<string>();

  /**
   * Apply filter
   * @returns Filtered state
   */
  const applyFilter = () => {
    const result = filterTerm ? microState?.list.filter(item => JSON.stringify(item).includes(filterTerm)) : microState?.list
    return result
  }

  /**
   * Apply filter
   * @returns Filtered state
   */
  const search = <T,>(_list: T[]) => searchTerm ? _list.filter(item => JSON.stringify(item).includes(searchTerm)) : _list

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
