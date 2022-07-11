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
    list: Record<string, Item>
    editItemId: string
    meta?: {
      categories?: Meta
      subCategories?: Meta
    }
  }

/**
* Extend store events payload with custom implementation
*/
export type ExtendMicroStoreEventsPayload = { event: "dog", payload: Meta }
    | { event: "cat", payload: Item }
    | { event: 'scream', payload: {level: string}}
    | {}

export type Item = any
export type Meta = any


const d: ExtendMicroStoreEventsPayload = {
    event: 'scream',
    payload: {
        level: 'ddddd'
    }
}