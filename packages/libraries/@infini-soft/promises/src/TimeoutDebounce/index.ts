/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { promiseDebounce, PromiseDebounceProps } from "../Debounce"
import { promiseTimeout, PromiseTimeoutProps } from "../Timeout"

export type PromiseTimeoutDebounceProps<T> =
  {
    /**
     * Promise request
     */
    request: () => T | PromiseLike<T>
  } & PromiseTimeoutProps<T> & PromiseDebounceProps<T>

export const promiseTimeOutDebounce = <T,>({ request, timeout, delay, gentleError=()=>false }: PromiseTimeoutDebounceProps<T>) =>  promiseDebounce({
      request: () => promiseTimeout({ request, timeout, gentleError }),
      delay
    })
