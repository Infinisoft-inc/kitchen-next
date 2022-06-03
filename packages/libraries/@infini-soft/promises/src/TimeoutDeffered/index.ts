/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { promiseDeffered, PromiseDefferProps } from "../Deffered"
import { promiseTimeout, PromiseTimeoutProps } from "../Timeout"

export type PromiseTimeoutDefferedProps<T> =
  {
    /**
     * Promise request
     */
    request: () => T | PromiseLike<T>
  } & PromiseDefferProps<T> & PromiseTimeoutProps<T>

export const promiseTimeOutDeffered = <T,>({ request, timeout, delay, gentleError = () => false }: PromiseTimeoutDefferedProps<T>) => promiseDeffered({
  request: () => promiseTimeout({ request, timeout, gentleError }),
  delay
})
