
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
export type SubscriberEventHandler<S = unknown, Payload = unknown> = (event: string, state?: State<S>, payload?: Payload) => void
export type Subscription<S, Payload> = {
  callback: SubscriberEventHandler<S, Payload>
  options?: SubscribeOptions
}

export type Subscribers<S, Payload> = Map<Symbol, Subscription<S, Payload>>


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
 * Mutate
 * data mutation/transformation
 */
export type Mutate<S = unknown> = (callback: (state: S) => S) => void
export type MutateNormalized<K, I> = (callback: (normalized: NormalizedState<K, I>) => NormalizedState<K, I>) => void

/**
 * Store State
 */
export type State<S> = S;
export type StateListItem<I> = I
export type NormalizedState<K, I> = Map<K, I>
/**
 * Store input
 */
export type Init<S> = () => Promise<S> | S
export type CreateStoreOptions<K extends keyof S, S, I> = {
  // Unique key for normalization
  id?: K
  // Use path to call keyPredicat
  normalizeKeys?: K[]
  // Callback to find and return key
  keyPredicat?: (arg: I) => any

}

/**
 * Store output
 */

export type IStore<S, Payload, K, I> = {
  // Read
  getSnapshot: () => S;
  getServerSnapshot: () => S;
  getNormalizedState: () => NormalizedState<K, I>;

  // Pubsub
  subscribe: (eventhandler: SubscriberEventHandler<S, Payload>, options?: SubscribeOptions) => () => void;
  publish: PublisherEvent<Payload>
  cook: (eventhandler: CookersEventHandler<S, Payload>) => () => void;

  // Mutation
  mutate: Mutate<S>
  mutateNormalized: MutateNormalized<K,I>
}

/**
 * Store abstraction
 *
 * S        State
 * Payload  Events payload
 * K        Normalized data id key type
 * I        Normalized data type
 */
export type Store = <S, Payload, K extends keyof S, I>(init?: Init<S>, options?: CreateStoreOptions<K, S, I>) => IStore<S, Payload, K, I>
