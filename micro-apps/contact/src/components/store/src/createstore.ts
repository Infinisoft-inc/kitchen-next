/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { CreateStore, EmitEvent, InitStore, Mutate, Store, SubscribeOptions, SubscriberEventHandler, Subscribers } from "../types";


/**
 * Store Creator
 * @param init State initializer function
 * @returns new store
 */
export const createstore: CreateStore = <S, P>(init?: InitStore<S>): Store<S, P> => {
  // const _init = init?.()
  const subscribers: Subscribers<S, P> = new Map()
  let state: S
  let initialized = false

  if (!initialized) {
    init?.()
      .then(result => {
        state = result
        _notifyAllSubscribers('@initialization')
      })
      .catch(console.error)
      .finally(() => {
        initialized = true
      })
  }

  /**
 * Private
 */

  /**
   * Notify all subscribers
   * @param event   Event name
   * @param payload Event payload
   */
  const _notifyAllSubscribers: EmitEvent<P> = (event, payload) => {
    subscribers.forEach(({ callback, options }) => {
      // if (
      //   !options?.filter ||
      //   event.match(options.filter)
      // ){
      callback(event, state, payload);
      // }

    })
  }


  /**
   * Initialize store
   * @param _state Initial store state
   */
  // const initialize = (_state: S) => {
  //   state = _state

  //   _notifyAllSubscribers('@initialization')
  // }

  // if (_init && !('then' in _init)) {
  // initialize(_init)
  // }

  // if (_init && ('then' in _init)) {
  //   (_init as Promise<S>).then?.(initialize)
  //     .catch(console.error)
  // }

  /**
   * Public
   */

  /**
   * Subscribe to store
   * @param callback Called on events
   * @returns Unsubscribe method
   */
  const subscribe = (callback: SubscriberEventHandler<S, P>, options?: SubscribeOptions) => {
    const id = Symbol()
    subscribers.set(id, { callback, options })
    return () => { subscribers.delete(id) }
  }

  /**
   * State mutation
   * @param callback Called with state, must return new state
   */
  const mutate: Mutate<S> = (callback: (_state: S) => S) => {
    state = callback(state)

    _notifyAllSubscribers('mutation')
  }

  /**
   * Emit an event on the hub
   * @param event Event name
   * @param payload Custom payload
   */
  const emit: EmitEvent<P> = (event, payload) => {
    _notifyAllSubscribers(event, payload)
  }

  return {
    subscribe,
    emit,
    getState: () => state,
    mutate,
  }
}
