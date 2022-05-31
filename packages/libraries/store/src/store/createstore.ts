/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Cookers, CookersEventHandler, CreateStoreOptions, Init, IStore, Mutate, NormalizedState, PublisherEvent, Store, SubscriberEventHandler, Subscribers } from "./types";


/**
 * Store Creator
 * @param init State initializer function
 * @returns new store
 */
const createstore: Store = <S, Payload, K extends keyof S, I>(init?: Init<S>, options?: CreateStoreOptions<K, S, I>): IStore<S, Payload, K> => {
  const _init = init?.()
  const subscribers: Subscribers<S, Payload> = new Map()
  const cookers: Cookers<S, Payload> = new Map()
  let state: S;
  let normalizedState: NormalizedState<K, typeof state> = new Map();

  /**
   * Convert array to map with k as key
   * @param k key
   * @param ar array
   * @returns Mapped items like Map<k, array[k]>
   */

  /**
   * Private
   */

  const normalizeArray = (ar: S) => {
    const { id: key, keyPredicat, normalizeKeys } = options ?? {}
    const normalize: NormalizedState<K, S> = new Map()


    if (ar && Array.isArray(ar) && keyPredicat) {
      ar.forEach((item) => normalize.set(keyPredicat(item), item))
    }

    if (ar && typeof ar === 'object' && keyPredicat && normalizeKeys) {
      normalizeKeys.forEach(_k => {
        if (Array.isArray(ar[_k])) {
          (ar[_k] as unknown as Array<typeof ar[typeof _k]>).forEach((item: any) => normalize.set(keyPredicat(item), item))
        }
      })
    }

    if (ar && Array.isArray(ar) && key) {
      ar.forEach(item => normalize.set(item[key], item))
    }

    return normalize;
  }

  const _notifyAllSubscribers: PublisherEvent<Payload> = (event, payload) => {
    subscribers.forEach((_callback) => {
      _callback(event, state, payload);
    })
  }

  /**
   * Initialize
   */

  /**
   *
   * @param _state
   */
  const initialize = (_state: typeof state) => {
    state = _state

    normalizedState = normalizeArray(_state as S)

    _notifyAllSubscribers('@initialization')
  }

  if (_init && !('then' in _init)) {
    initialize(_init)
  }

  if (_init && ('then' in _init)) {
    (_init as Promise<S>).then?.(initialize)
      .catch(console.error)
  }


  /**
   *
   * @param event
   * @param payload
   */

  const _notifyAllCookers: PublisherEvent<Payload> = (event, payload) => {
    cookers.forEach((_callback) => {
      state = _callback(event, state, payload);
    })
  }

  /**
   * Public
   */

  /**
   *
   * @param callback
   * @returns
   */
  const subscribe = (callback: SubscriberEventHandler<S, Payload>) => {
    const id = Symbol()
    subscribers.set(id, callback)
    return () => { subscribers.delete(id) }
  }

  const subscribeFilter = (callback: SubscriberEventHandler<S, Payload>) => {
    const id = Symbol()
    subscribers.set(id, callback)
    return () => { subscribers.delete(id) }
  }

  const mutate: Mutate<S> = (callback: (_state: S)=>S) => {
    state = callback(state)

    _notifyAllCookers('mutation')
    _notifyAllSubscribers('mutation')
  }

  const cook = (callback: CookersEventHandler<S, Payload>) => {
    const id = Symbol()
    cookers.set(id, callback)
    return () => { cookers.delete(id) }
  }

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
    mutate

  }
}

export default createstore
