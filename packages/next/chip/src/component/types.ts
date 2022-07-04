/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

/**
 * Extend component with custom props
 */
export type ExtendComponentProps = {doguette?: string};

/**
 * Extend context with custom implementation
 */
export type ExtendMicroContext = {}

/**
 * Extend state with custom implementation
 */
export type ExtendMicroStoreState = {
    user:string
    bob: number
} & IDog & ICat

/**
* Extend store events payload with custom implementation
*/
export type ExtendMicroStoreEventsPayload = { event: "dog", payload: IDog }
    | { event: "cat", payload: ICat }
    | { event: 'scream', payload: {level: string}}
    | {}

type IDog = { dog: string }
type ICat = { cat: string }


const d: ExtendMicroStoreEventsPayload = {
    event: 'scream',
    payload: {
        level: 'ddddd'
    }
}