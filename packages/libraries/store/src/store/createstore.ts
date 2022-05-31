/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Cookers, CookersEventHandler, CreateStoreOptions, Init, IStore, NormalizedState, PublisherEvent, State, Store, SubscriberEventHandler, Subscribers } from "./types";


/**
 * Store Creator
 * @param init State initializer function
 * @returns new store
 */
const createstore: Store = <S, Payload, K>(init?: Init<S>, options?: CreateStoreOptions<K, S>): IStore<S, Payload, K> => {
  const _init = init?.()
  const subscribers: Subscribers<S, Payload> = new Map()
  const cookers: Cookers<S, Payload> = new Map()
  let state: State<S>;
  let normalizedState: NormalizedState<K, typeof state> = new Map();

  /**
   * Convert array to map with k as key
   * @param k key
   * @param ar array
   * @returns Mapped items like Map<k, array[k]>
   */
  // type Condition<K, NS> = NS extends object ? path extends keyof NS : never

  const normalizeArray = <K, S>(ar: S) => {
    const {key, keyPredicat} = options ?? {}
    const normalize: NormalizedState<K, S> = new Map()


    // if (ar && typeof ar === 'object' && path && keyPredicat && Array.isArray(ar[path])) {
    //   ar[path].forEach((item) => normalize.set(keyPredicat(item), item))
    // }

    if (ar && Array.isArray(ar) && keyPredicat) {
      ar.forEach((item) => normalize.set(keyPredicat(item), item))
    }

    if (ar && Array.isArray(ar) && key) {
      ar.forEach(item => normalize.set(item[key], item))
    }

    // if (ar && Array.isArray(ar)) {
    //   ar.forEach(item => normalize.set(Symbol() as unknown as K, item))
    // }

    return normalize;
  }

  const _notifyAllSubscribers: PublisherEvent<Payload> = (event, payload) => {
    subscribers.forEach((_callback) => {
      _callback(event, state, payload);
    })
  }

  const initialize = (_state: typeof state) => {
    state = _state

    // if ((options?.key || options?.keyPredicat) && Array.isArray(_state)) {
      normalizedState = normalizeArray(_state)
    // }

    _notifyAllSubscribers('@initialization')
  }

  if (_init && !('then' in _init)) {
    initialize(_init)
  }

  if (_init && ('then' in _init)) {
    (_init as Promise<State<S>>).then?.(initialize)
      .catch(console.error)
  }

  const _notifyAllCookers: PublisherEvent<Payload> = (event, payload) => {
    cookers.forEach((_callback) => {
      state = _callback(event, state, payload);
    })
  }

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
    getNormalizedState: () => normalizedState
  }
}

export default createstore
