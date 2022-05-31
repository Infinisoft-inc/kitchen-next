
/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

/**
 * Subscriber get notified on state change immutable only
 */
export type SubscriberEventHandler<S = unknown, Payload = unknown> = (event: string, state?: State<S>, payload?: Payload) => void
export type Subscribers<S, Payload> = Map<Symbol, SubscriberEventHandler<S, Payload>>

/**
 * Publisher emit events with optionnal payload
 */
export type PublisherEvent<Payload = unknown> = (event: string, payload?: Payload) => void

/**
 * Cookers are middlewares
 * responsible of cooking
 * data mutation/transformation
 */
export type CookersEventHandler<S = unknown, Payload = unknown> = (event: string, state?: State<S>, payload?: Payload) => S
export type Cookers<S, Payload> = Map<Symbol, CookersEventHandler<S, Payload>>

/**
 * Store State
 */
export type State<S> = S | S[] | {[k:string]: S | S[]}
export type NormalizedState<K, S> = Map<K, S>
/**
 * Store input
 */
export type Init<S> = () => Promise<State<S>> | State<S>
export type CreateStoreOptions<K, S> = {
  // Unique key for normalization
  key?: K
  // Use path to call keyPredicat
  path?: string
  // Callback to find and return key
  keyPredicat?: (arg: S) => any

}

/**
 * Store output
 */
export type GetState<S> = () => State<S>
export type GetNormalizedState<K, S> = () => NormalizedState<K, State<S>>

export type IStore<S, Payload, K = any> = {
  getSnapshot: GetState<S>
  getServerSnapshot?: GetState<S>;
  getNormalizedState?: GetNormalizedState<K, S>;

  subscribe: (eventhandler: SubscriberEventHandler<S, Payload>) => () => void;
  publish: PublisherEvent<Payload>
  cook: (eventhandler: CookersEventHandler<S, Payload>) => () => void;
}

/**
 * Store abstraction
 */
export type Store = <S, Payload, K >(init?: Init<S>, options?: CreateStoreOptions<K,S>) => IStore<S, Payload, K>
