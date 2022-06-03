/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type PromiseDefferProps<T> =
  {
    /**
     * Promise request
     */
    request: () => T | PromiseLike<T>
    /**
     * Delay in ms added after promise fulfilled or rejected
     * Default is 1000ms
     */
    delay?: number
  }

/**
 * Deffered Promise, will add delay after promise success or fails
 * @param param0 {PromiseDefferProps<T>}
 * @returns fulfills with result if success, reject with error
 */
export const promiseDeffered = <T,>({ request, delay = 1000 }: PromiseDefferProps<T>) => new Promise<T>(async (resolve, reject) => {
  let done: () => void

  try {
    const result = await request();
    done = () => resolve(result)

  } catch (error) {
    done = () => reject(error)
  } finally {
    setTimeout(() => {
      done?.()
    }, delay)
  }
})
