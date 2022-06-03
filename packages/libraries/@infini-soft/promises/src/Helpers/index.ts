/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
/**
 * 
 * @returns Promise factory never resolving or rejects
 */
export const factoryPromiseFuncNeverResolve = () => new Promise(() => { })

/**
 * 
 * @param timeout Promise resolve delay
 * @returns Function resolving promise
 */
export const factoryPromiseFuncResolveIn = (timeout: number) =>  () => new Promise<void>((resolve) => {setTimeout(resolve,timeout) })

/**
 * 
 * @param timeout Promise reject delay
 * @returns Function rejecting promise
 */
export const factoryPromiseFuncRejectIn = (timeout: number) =>  () => new Promise<void>((res,reject) => {setTimeout(reject,timeout) })