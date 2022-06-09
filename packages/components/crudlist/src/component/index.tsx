/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */
import React, { startTransition, Suspense } from 'react';
import { AddIcon } from './assets/svg';
import css from './index.module.css';
import { CrudListProps } from './types';

const InputText = React.lazy(() => import(/* webpackPrefetch: true */'inputtext/InputText'));

export const CrudList = ({
  listTitle,
  icon,
  itemList = [],
  onAdd,
  onChange,
  onRemove,
  itemRender,
  placeholder = 'Insert here',
  ...props
}: CrudListProps) => {
  const [state, setState] = React.useState<string | undefined>(undefined);

  const handleAdd = () => {
    startTransition(() => {
      onAdd?.(state);
      setState('')
    })
  }

  return <Suspense>
    <div data-style='input:text:container'>

      <div className={css.list}>
        <div className={css.header}>
          {listTitle ?
            listTitle
            :
            <>
              <InputText before={icon} value={state} onKeyDown={e => { if (e.key === 'Enter') { handleAdd() } }} placeholder={placeholder} onChange={e => setState(e.target.value)} />
              <button onClick={handleAdd} data-style='input:text:button:add'><AddIcon /></button>
            </>
          }
        </div>
        {itemList?.length > 0 &&
          <div className={css.content}>
            {
              itemList?.map((item, i: number, array) =>
                itemRender ?
                  itemRender(item, i, array)
                  :
                  <InputText key={i} value={String(item)} onChange={e => onChange?.(i, e.target.value)} data-index={i} name={name + `${i}`} onRemove={() => onRemove?.(i)} removable />
              )
            }
          </div>}
      </div>
    </div>
  </Suspense>
}

export default CrudList;
