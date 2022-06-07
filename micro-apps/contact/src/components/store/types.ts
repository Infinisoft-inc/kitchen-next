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

export type SubscriberEventHandler<S = unknown, P= unknown> = (event: string, state?: S, payload?: P) => void
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
export type Mutate<S = unknown> = (callback: (state: S) => S) => void

/**
 * CreateStore Parameters
 */
export type InitStore<S> = () => Promise<S>

/**
 * Store
 */

export type Store<S, P> = {
  getState: () => S;
  subscribe: (eventhandler: SubscriberEventHandler<S, P>, options?: SubscribeOptions) => () => void;
  emit: EmitEvent<P>
  mutate: Mutate<S>
}

/**
 * Create store abstraction
 *
 * S        State
 * Payload  Events payload
 * K        Normalized data id key type
 * I        Normalized data type
 */
export type CreateStore = <S, P>(init?: InitStore<S>) => Store<S, P>



/**
 * Field Mutator
 */
export type UseMutatorGeneric<T, V, R> = (field: T, newValue: V) => R
export type UseMutator = UseMutatorGeneric<keyof API.Item, any, void>

/**
 * Input field mutator
 */
export type InputMutatorGeneric<T, E> = (field: T) => (e: E) => void
export type InputMutator = InputMutatorGeneric<keyof API.Item, React.ChangeEvent<HTMLInputElement>>

/**
 * List mutator
 */
export type UseListMutatorGeneric<T, R> = (field: T) => R
export type UseListMutator = UseListMutatorGeneric<keyof API.Item, CrudMutators>

/**
 * Crud list mutators
 */
type CrudMutators = {
  onAdd: <T>(newValue?: T) => void
  onChange: <T>(index: number, newValue: T) => void
  onRemove: (index: number) => void
}

/**
 * Input List field mutator
 */
export type InputListMutatorGeneric<T, E> = (field: T) => (e: E) => void
export type InputListMutator = InputMutatorGeneric<keyof API.Item, React.ChangeEvent<HTMLInputElement>>

/**
 * Store Item Mutator/Selector
 */
export type UseItemGeneric<T> = (field: string) => { item: T, inputMutator: InputMutator, listMutator: UseListMutator}
export type UseItem = UseItemGeneric<API.Item>
