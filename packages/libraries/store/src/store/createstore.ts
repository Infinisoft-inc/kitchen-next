/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { EventHandler, NotifyAllSubscribers, Store } from "./types";

const createstore: Store = <State, Payload>(init?: State | (() => Promise<State>))=> {
  let state: State | undefined;

  if (typeof init !== 'function') {
    state = init
  }

  if (init && typeof init === 'function') {
    // @ts-ignore
    init()
      .then((result: State) => {state = result})
      .catch(console.error)
      .finally(() => notifyAllSubscribers('@initialization'))
  }

  const subscribers = new Map<Symbol, EventHandler<State, Payload>>()


  const notifyAllSubscribers:NotifyAllSubscribers<Payload> = (event, payload) => {
    subscribers.forEach((_callback) => {
      return _callback(event, state, payload);
    })
  }

  const _store =  {

    subscribe: (callback: EventHandler<State, Payload>) => {
      const id = Symbol()
      subscribers.set(id, callback)
      return () => { subscribers.delete(id) }
    },

    getSnapshot: () => state,
    emit: notifyAllSubscribers

    // add: (val: T) => {
    //   state.list = [val, ...state.list]
    //   notifyAll()
    // },

    // remove: (predicat: (value: T, index: number, array: T[]) => unknown, thisArg?: any): void => {
    //   // state.list = state.list.filter((_, i) => i !== index)
    //   state.list = state.list.filter(predicat)

    //   notifyAll()
    // },

    // change: (predicat: Predicat) => {
    //   // state.list = state.list.map((_item, i) => i === index ? val : _item)
    //   // state.list = state.list.map(predicat)
    //   notifyAll()
    // },

    // edit: (predicat: ()=>T) => {
    //   state = {...state, item: state.list.find(predicat) || null}
    //   console.log(`state = `, state)
    //   console.log(`subscribers = `, subscribers)
    //   notifyAll()
    // },

    // commit: () => {

    //   // if (state.item && state.item?.SK) {
    //     // const id = state.list.findIndex(_item => _item?.SK?.includes(state.item?.SK!))
    //     // state.list[id] = state.item;
    //     notifyAll()
    //   // }
    // },

    // clear: () => {
    //   state.item = null;
    //   notifyAll()
    // },

  }

  return _store;
}

export default createstore
