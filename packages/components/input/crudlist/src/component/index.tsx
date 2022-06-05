/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */
import React, { Suspense } from 'react';
import { AddIcon } from './assets/svg';
// import css from './index.module.css';
import { CrudListProps } from './types';

const InputText = React.lazy(() => import(/* webpackPrefetch: true */'inputtext/InputText'));

export const CrudList = ({
  title,
  icon,
  itemList,
  onAdd,
  onChange,
  onRemove,
  name,
  k,
  keyPredicat = () => new Date().getTime().toFixed(0).toString(),
  ...props
}: CrudListProps) => {

  return <Suspense>
    <div data-style='input:text:root'>

      {/* <FlexLine
         left={icon}
         right={ */}
      <div className={'css.list'}>
        <div className={'css.header'}>
          {title}
          milieskiodoo
          <button onClick={onAdd}><AddIcon /></button>
        </div>
        <div className={'css.content'}>
          {
            itemList?.map(
              (item, i: number) => {
                console.log(`keypredicat11111 `, item)
                return <InputText key={i} value={String(item)} name={name} id={`${name}----${i}`} onChange={e => onChange(i, item, e.target.value)} onRemove={() => onRemove(i, item)} copyable removable />
              }
            )
          }
        </div>
      </div>
      {/* } */}
      {/* /> */}
    </div>
  </Suspense>
}

export default CrudList;
