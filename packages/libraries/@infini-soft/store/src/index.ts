export * from './lib/devtool'
export * from './lib/store'

/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

/**
 * Subscriber get notified on state change immutable only
 */
 export type SubscribeOptions = {
    /**
     * Filter events
     */
    filter?: string | RegExp
  }
  /**
   * E = Event
   * S = State
   * P = Payload
   */
   export type SubscriberEventHandler<S = unknown, P = unknown> = (event: string, state?: S, payload?: P) => void
   export type Subscription<S, P> = {
    callback: SubscriberEventHandler<S, P>
    options?: SubscribeOptions
  }
  
  export type Subscribers<S, P> = Map<Symbol, Subscription<S, P>>
  
  
  /**
   * Publisher emit events with optionnal payload
   */
   export type EmitEvent<P = unknown> = (event: string, payload?: P) => void
  
  /**
   * Mutate
   * data mutation/transformation
   */
   export type Mutate<S = unknown> = (callback: (state?: S) => S) => void
  
  /**
   * CreateStore Parameters
   */
  export type InitStore<S> = () => Promise<S>
  
  /**
   * Store
   */
  export interface IStore<S, P> {
    getState: () => S | undefined;
    subscribe: (eventhandler: SubscriberEventHandler<S, P>, options?: SubscribeOptions) => () => void;
    emit: EmitEvent<P>
    mutate: Mutate<S>
  }
  
  export type CreateStoreOptions = {
    devtool?: boolean
  }
  
  
  /**
   * Field Mutator
   */
   export type UseMutatorGeneric<T, V, R> = (field: T, newValue: V) => R
  