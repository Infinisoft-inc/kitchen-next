/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { MicroPayload, MicroState } from "@/context/micro";
import { CreateStore, EmitEvent, Mutate, SubscribeOptions, SubscriberEventHandler, Subscribers } from "../types";
import { devtool } from "./devtool";

/**
 * Store Creator
 * @param init State initializer function
 * @returns new store
 */
export const createstore: CreateStore = (init?, opt?) => {
  type S = MicroState
  type P = MicroPayload
  const subscribers: Subscribers<S, P> = new Map()
  let state: S
  let initialized = false
  /**
   * Initialize once
   */
  if (!initialized) {
    initialized = true

    init?.()
      .then(result => {
        state = { list: result.list, editItemId: '' }
        devtool({
          getState: () => ({ list: result.list, editItemId: '' }),
          subscribe,
          mutate,
          emit
        })

        emit('@initialization', state)
      })
      .catch(console.error)
  }


  /**
   * Notify all subscribers
   * @param event   Event name
   * @param payload Event payload
   */
  const _notifyAllSubscribers: EmitEvent<P> = (event, payload) => {
    subscribers.forEach(({ callback, options }) => {
      callback(event, state, payload);
    })
  }

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
    const newState = callback(state)

    console.log(`state === newState ? `, state === {
      ...state,
      ...newState
    })

    state = {
      ...state,
      ...newState
    };



    console.log(`mutation = `, state)
    emit('mutation', state)
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
