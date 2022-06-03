/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type PromiseDebounceProps<T> =
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

let timer: ReturnType<typeof setTimeout>;

/**
 * Promise with debounce
 * @param param0 {PromiseDebounceProps<T>}
 * @returns fulfills with result if success, reject with error
 */
export const promiseDebounce = <T,>({ request, delay = 1000 }: PromiseDebounceProps<T>) => new Promise<T>(async (resolve, reject) => {
  const debounce = (trigger: Function, duration: number) => {
    clearTimeout(timer);
    timer = setTimeout(() => trigger(), duration);
  };

  const trigger = async () => {
    try {
      const result = await request();
      resolve(result)
    } catch (error) {
      reject(error)
    }
  }

  debounce(trigger, delay)
})
