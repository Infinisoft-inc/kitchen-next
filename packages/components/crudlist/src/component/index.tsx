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
import { CrudListProps } from './types';

const InputText = React.lazy(() => import(/* webpackPrefetch: true */'inputtext/InputText'));
const FlexLine = React.lazy(() => import(/* webpackPrefetch: true */'flexline/FlexLine'));


export const CrudList = ({
  title,
  icon,
  store
}: CrudListProps) => {

  let {list} = useSyncExternalStore(store.subscribe, store.getSnapshot)

  return <Suspense>
    <div className={css.root}>
      <FlexLine
        left={icon}
        right={
          <div className={css.list}>
            <div className={css.header}>
              {title}
              <button onClick={() => { store.add(`hello ${list.length}`) }}><AddIcon /></button>
            </div>

            {
              list?.map(
                (item, i: number) =>
                  <InputText key={`item${i}`} value={String(list[i])} onChange={(val) => { store.change(val.target.value, ()=>{}) }} onRemove={() => store.remove(()=>{})} copyable removable />
              )
            }
          </div>
        }
      />
    </div>
  </Suspense>
}

export default CrudList;
