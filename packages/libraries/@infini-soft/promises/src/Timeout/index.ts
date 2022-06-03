/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
/**
 * Promise with timeout and cancel
 */

/**
 * @type {T} Promise return type
 */
export type PromiseTimeoutProps<T> =
  {
    /**
     * Promise request
     */
    request: () => T | PromiseLike<T>
    /**
     * Cancel callback executed on timeout
     */
    cancel?: () => void
    /**
     * Timeout delay in ms
     * Default is 2000ms
     */
    timeout?: number
    /**
     * Gentle Errors Predicat
     * Error conditions when promise is resolved
     * Return value
     *  - true will reject with result
     *  - false will resolve 
     */
    gentleError?: (arg: T)=> boolean
  }

/**
 * Promise with timeout
 * @param param0 {PromiseTimeoutProps}
 * @returns fulfills with result if success, reject with error or reject with timeout
 */
export const promiseTimeout = <T,>({ request, cancel, timeout = 2000, gentleError=()=>false }: PromiseTimeoutProps<T>) => new Promise<T>(async (resolve, reject) => {
  const timer = setTimeout(() => {
    cancel?.()
    reject('timeout')
  }, timeout)

  try {
    const result = await request();

    if (gentleError(result)){
      reject(result)
    } else {
      resolve(result)
    }


  } catch (error) {
    reject(error)
  } finally {
    clearTimeout(timer)
  }
})