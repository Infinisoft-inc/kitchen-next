/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Snapshot, Store } from "./types"

const createstore: Store = <T,>(init?: T[] | (() => Promise<T[]>))=> {
  let state: Snapshot<T> = {
    list: [],
    item: null
  }

  if (typeof init !== 'function') {
    state.list = init ?? []
  }

  if (typeof init === 'function') {
    init()
      .then(result => state = {...state, list: result})
      .catch(console.error)
      .finally(() => notifyAll())
  }

  const subscribers = new Map<Symbol, Function>()

  const notifyAll = () => {
    subscribers.forEach((_callback) => {
      _callback()
    })
  }

  const _store =  {

    subscribe: (callback: Function) => {
      const id = Symbol()
      subscribers.set(id, callback)
      return () => { subscribers.delete(id) }
    },

    getSnapshot: () => state,

    add: (val: T) => {
      state.list = [val, ...state.list]
      notifyAll()
    },

    remove: (predicat: ()=>T) => {
      // state.list = state.list.filter((_, i) => i !== index)
      state.list = state.list.filter(predicat)
      notifyAll()
    },

    change: (val: T, predicat: ()=>T) => {
      // state.list = state.list.map((_item, i) => i === index ? val : _item)
      state.list = state.list.map(predicat)
      notifyAll()
    },

    edit: (predicat: ()=>T) => {
      state = {...state, item: state.list.find(predicat) || null}
      console.log(`state = `, state)
      console.log(`subscribers = `, subscribers)
      notifyAll()
    },

    commit: () => {

      // if (state.item && state.item?.SK) {
        // const id = state.list.findIndex(_item => _item?.SK?.includes(state.item?.SK!))
        // state.list[id] = state.item;
        notifyAll()
      // }
    },

    clear: () => {
      state.item = null;
      notifyAll()
    },

  }

  return _store;
}

export default createstore
