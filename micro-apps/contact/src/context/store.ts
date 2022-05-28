const getId = () => new Date().getTime().toFixed(0)

// type Snapshot<T> = T[]
type Snapshot<T> = {
  list: T[]
  item: T | null
}

export type IStore<T = unknown> = {
  subscribe: (onStoreChange: () => void) => () => void
  getSnapshot: () => Snapshot<T>
  getServerSnapshot?: () => Snapshot<T>
} & ICrud<T>

type ICrud<T = unknown> = {
  add: (item: T) => void
  change: (val: T, index: number) => void
  remove: (item: number) => void
  edit: (item: string) => void
  commit: (item: number) => void
  clear: () => void
}

export const createstore = <T extends Pick<API.Item, 'SK'>,>(init?: T[] | (() => Promise<T[]>)): IStore<T> => {
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

  const subscribers = new Map<string, Function>()

  const notifyAll = () => {
    subscribers.forEach((_callback) => {
      _callback()
    })
  }

  return {

    subscribe: (callback: Function) => {
      const id = getId()
      subscribers.set(id, callback)
      return () => { subscribers.delete(id) }
    },

    getSnapshot: () => state,

    add: (val: T) => {
      state.list = [val, ...state.list]
      notifyAll()
    },

    remove: (index: number) => {
      state.list = state.list.filter((_, i) => i !== index)
      notifyAll()
    },

    change: (val: T, index: number) => {
      state.list = state.list.map((_item, i) => i === index ? val : _item)
      notifyAll()
    },

    edit: (id: string) => {
      state.item = state.list.find(_item => _item?.SK?.includes(id)) || null
      notifyAll()
    },

    commit: () => {
      if (state.item && state.item?.SK) {
        const id = state.list.findIndex(_item => _item?.SK?.includes(state.item?.SK!))
        state.list[id] = state.item;
        notifyAll()
      }
    },

    clear: () => {
      state.item = null;
      notifyAll()
    },

  }
}
