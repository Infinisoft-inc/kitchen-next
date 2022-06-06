/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Cookers, CookersEventHandler, CreateStore, CreateStoreOptions, Init, Mutate, MutateNormalized, NormalizedState, PublisherEvent, Store, SubscribeOptions, SubscriberEventHandler, Subscribers } from "./types";


/**
 * Store Creator
 * @param init State initializer function
 * @returns new store
 */
export const createstore: CreateStore = <S, Payload, K extends keyof S, I>(init?: Init<S>, options?: CreateStoreOptions<K, S, I>): Store<S, Payload, K, I> => {
  const _init = init?.()
  const subscribers: Subscribers<S, Payload> = new Map()
  const cookers: Cookers<S, Payload> = new Map()
  let state: S
  let normalizedState: NormalizedState<K, I> = new Map();


  /**
 * Private
 */

  /**
   * Convert state to map
   * @param _state
   * @returns normalized mapped state
   */

  const normalizeState = (_state: S) => {
    const { id: key, keyPredicat, normalizeKeys } = options ?? {}
    const normalize: NormalizedState<K, I> = new Map()


    /**
     * Map state when
     * - Array
     * - Using predicat callback
     */
    if (_state && Array.isArray(_state) && keyPredicat) {
      _state.forEach((item) => normalize.set(keyPredicat(item), item))
    }

    /**
     * Map state when
     * - State is an object
     * - Map only keys within normalizeKeys
     * - Using predicat callback
     */
    if (_state && typeof _state === 'object' && keyPredicat && normalizeKeys) {
      normalizeKeys.forEach(_k => {
        if (Array.isArray(_state[_k])) {
          (_state[_k] as unknown as Array<typeof _state[typeof _k]>).forEach((item: any) => normalize.set(keyPredicat(item), item))
        }
      })
    }

    /**
     * Map state when
     * - Array
     * - Use key
     */
    if (_state && Array.isArray(_state) && key) {
      _state.forEach(item => normalize.set(item[key], item))
    }

    return normalize;
  }


  /**
   * Notify all subscribers
   * @param event   Event name
   * @param payload Event payload
   */
  const _notifyAllSubscribers: PublisherEvent<Payload> = (event, payload) => {
    subscribers.forEach(({callback, options}) => {
      if (
        !options?.filter ||
        event.match(options.filter)
      ){
        callback(event, state, payload);
      }

    })
  }


  /**
   * Initialize store
   * @param _state Initial store state
   */
  const initialize = (_state: typeof state) => {
    state = _state

    normalizedState = normalizeState(_state as S)

    _notifyAllSubscribers('@initialization')
  }

  if (_init && !('then' in _init)) {
    initialize(_init)
  }

  if (_init && ('then' in _init)) {
    (_init as Promise<S>).then?.(initialize)
      .catch(console.error)
  }

  const _notifyAllCookers: PublisherEvent<Payload> = (event, payload) => {
    cookers.forEach((_callback) => {
      state = _callback(event, state, payload);
    })
  }

  /**
   * Public
   */

  /**
   * Subscribe to store
   * @param callback Called on events
   * @returns Unsubscribe method
   */
  const subscribe = (callback: SubscriberEventHandler<S, Payload>, options?: SubscribeOptions) => {
    const id = Symbol()
    subscribers.set(id, {callback, options})
    return () => { subscribers.delete(id) }
  }

  /**
   * State mutation
   * @param callback Called with state, must return new state
   */
  const mutate: Mutate<S> = (callback: (_state: S) => S) => {
    state = callback(state)

    _notifyAllCookers('mutation')
    _notifyAllSubscribers('mutation')
  }

  /**
   * State mutation
   * @param callback Called with state, must return new state
   */
  const mutateNormalized: MutateNormalized<K, I> = (callback) => {
    normalizedState = callback(normalizedState)

    _notifyAllCookers('mutation')
    _notifyAllSubscribers('mutation')
  }

  /**
   * Subscribe a new middleware
   * @param callback Function called on events
   * @returns Unsubscribe callback
   */
  const cook = (callback: CookersEventHandler<S, Payload>) => {
    const id = Symbol()
    cookers.set(id, callback)
    return () => { cookers.delete(id) }
  }


  /**
   * Publish an event on the hub
   * @param event Event name
   * @param payload Custom payload
   */
  const publish: PublisherEvent<Payload> = (event, payload) => {
    _notifyAllCookers(event, payload)
    _notifyAllSubscribers(event, payload)
  }

  return {
    subscribe,
    publish,
    cook,
    getSnapshot: () => state,
    getServerSnapshot: () => state,
    getNormalizedState: () => normalizedState,
    mutate,
    mutateNormalized
  }
}
