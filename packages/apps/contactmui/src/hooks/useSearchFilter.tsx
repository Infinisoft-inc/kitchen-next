import { SearchSources } from '@/components/toolbar/search';
import config from '@/config/config.json';
import { MicroState, useMicroContext } from "@/context/micro";
import React, { startTransition, useCallback, useEffect, useSyncExternalStore } from "react";


type Selector<T,> = (_state: MicroState) => T

type UseSearchFilterProps<T> = {
  source?: SearchSources
  _selector?: Selector<T>
  filterPredicat?: (state: ReturnType<Selector<T>>, term: string) => ReturnType<Selector<T>>
}

/**
 * Filter store list
 * @returns filtered store list
 */
export const useSearchFilter = <T = MicroState,>({ source, _selector }: UseSearchFilterProps<T>) => {
  const { store } = useMicroContext();
  const microState = useSyncExternalStore(store.subscribe, useCallback(() => _selector ? _selector(store?.getState()) : store?.getState(), [_selector, store?.getState()]))
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
      return microState;
    }

    let result = {} as MicroState | T

    Object.keys(microState)?.forEach((key) => {
      if (JSON.stringify(microState[key])?.includes(filterTerm) || key.includes(filterTerm)) {
        result = { ...result, [key]: microState[key] }
      }
    })

    return result;
  }

  /**
   * Search
   * @returns Result
   */
  const search = <T,>(list: T) => {

    if (!searchTerm && !list) {
      return microState;
    }

    if (!searchTerm) {
      return list
    }
    let result = {} as MicroState | T

    Object.keys(microState)?.forEach((key) => {
      if (JSON.stringify(microState[key])?.includes(searchTerm)
        || key.includes(searchTerm)
      ) {
        result = { ...result, [key]: microState[key] }
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
  }, { filter: new RegExp(`${source}.filter.add`) }), [microState])

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
  }, { filter: new RegExp(`${source}.filter.clear`) }), [microState])

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
  }, { filter: new RegExp(`${source}.search.term`) }), [microState])

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
  }, { filter: new RegExp(`${source}.search.clear`) }), [microState])


  return search(applyFilter())
}
