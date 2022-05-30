const getId = () => new Date().getTime().toFixed(0)

// type Snapshot<T> = T[]
type Snapshot<T> = {
  list: T[]
}

export type IStore<T = unknown> = {
  subscribe: (onStoreChange: () => void) => () => void
  getSnapshot: () => Snapshot<T>
  getServerSnapshot?: () => Snapshot<T>
} & ICrud<T>

type ICrud<T = unknown> = {
  add: (item: T, _this: T[]) => void
  change: (val: T, index: number) => void
  remove: (item: number) => void
  edit: (item: string) => void
  commit: (item: number) => void
  clear: () => void
}

export const createstore = <T,>(init?: T[] | (() => Promise<T[]>)): IStore<T> => {
  let state: Snapshot<T> = {
    list: [],
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

  const subscribers = new Map<string, Function>()

  const notifyAll = () => {
    subscribers.forEach((_callback) => {
      _callback()
    })
  }

  const _store =  {

    subscribe: (callback: Function) => {
      const id = getId()
      subscribers.set(id, callback)
      return () => { subscribers.delete(id) }
    },

    getSnapshot: () => state,

    add: (val: T, _this: T[] = state.list) => {
      _this = [val, ..._this]
      // state.list = [...state.list]
      notifyAll()
    },

    remove: (index: number, _this: T[] = state.list) => {
      _this = state.list.filter((_, i) => i !== index)
      notifyAll()
    },

    change: (val: T, index: number) => {
      state.list = state.list.map((_item, i) => i === index ? val : _item)
      notifyAll()
    },

    edit: (id: string) => {
      // state = {...state, item: state.list.find(_item => _item?.SK?.includes(id)) || null}
      console.log(`state = `, state)
      console.log(`subscribers = `, subscribers)
      notifyAll()
    },

    commit: () => {
      // if (state.item && state.item?.SK) {
      //   const id = state.list.findIndex(_item => _item?.SK?.includes(state.item?.SK!))
      //   state.list[id] = state.item;
        notifyAll()
      // }
    },

    clear: () => {
      // state.item = null;
      notifyAll()
    },

  }

  return _store;
}
