/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */
import React, { Suspense, useSyncExternalStore } from 'react';
import { AddIcon } from './assets/svg';
import css from './index.module.css';

const getId = () => new Date().getTime().toFixed(0)

const InputText = React.lazy(() => import(/* webpackPrefetch: true */'inputtext/InputText'));
const FlexLine = React.lazy(() => import(/* webpackPrefetch: true */'flexline/FlexLine'));

type IStore<T = unknown> = {
  subscribe: (onStoreChange: () => void) => () => void
  getSnapshot: () => T[]
  getServerSnapshot?: () => T[]
} & ICrud<T>

type ICrud<T = unknown> = {
  add: (item: T) => void
  change: (val: T, index: number) => void
  remove: (item: number) => void
}

export const createstore = <T,>(init?: T[]): IStore<T> => {

  let data: T[] = init ?? []
  const subscribers = new Map<string, Function>()

  const notifyAll = () => {
    subscribers.forEach((_callback) => {
      _callback(data)
    })
  }

  return {

    subscribe: (callback: Function) => {
      const id = getId()
      subscribers.set(id, callback)
      return () => { subscribers.delete(id) }
    },

    getSnapshot: () => data,

    add: (val: T) => {
      data = [val, ...data]
      notifyAll()
    },

    remove: (index: number) => {
      data = data.filter((_, i) => i !== index)
      notifyAll()
    },

    change: (val: T, index: number) => {
      data = data.map((item, i) => i === index ? val : item)
      notifyAll()
    }

  }
}


export const CrudList = ({
  title,
  icon,
  mystore
}: { title: string, icon: React.ReactNode, mystore: IStore<string> }) => {

  let list = useSyncExternalStore(mystore.subscribe, mystore.getSnapshot)

  return <Suspense>
    <div className={css.root}>
      <FlexLine
        left={icon}
        right={
          <div className={css.list}>
            <div className={css.header}>
              {title}
              <button onClick={() => { mystore.add(`hello ${list.length}`) }}><AddIcon /></button>
            </div>

            {
              list?.map(
                (item, i: number) =>
                  <InputText key={`item${i}`} value={item} onChange={(val) => { mystore.change(val.target.value, i) }} onRemove={() => mystore.remove(i)} copyable removable />
              )
            }
          </div>
        }
      />
    </div>
  </Suspense>
}

export default CrudList;
