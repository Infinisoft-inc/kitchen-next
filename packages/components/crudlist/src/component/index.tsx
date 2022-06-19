/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */
import React, { startTransition, Suspense, useRef } from 'react';
import { AddIcon, DeleteIcon } from './assets/svg';
import css from './index.module.css';
import { CrudListProps } from './types';

const InputText = React.lazy(() => import(/*   */'inputtext/InputText'));
export const getId = () => String(new Date().getTime() * Math.random())

export const CrudList = ({
  listTitle,
  icon,
  itemList = [],
  onAdd,
  onChangeItem,
  onRemove,
  itemRender,
  label = '',
  placeholder,
  ...props
}: CrudListProps) => {
  const [state, setState] = React.useState<string | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAdd = () => {
    startTransition(() => {
      onAdd?.(state);
      setState(undefined)
      if (inputRef.current) {
        inputRef.current.value = ""
      }
    })
  }

  return <Suspense>
    <div className={css.root}>

      <div className={css.list}>
        <div className={css.header}>
          {listTitle ?
            listTitle
            :
            <>
              <InputText
                before={icon}
                after={<button onClick={handleAdd} className={css.actionButton}><AddIcon /></button>}
                label={label}
                ref={inputRef}
                defaultValue={state}
                onKeyDown={e => { if (e.key === 'Enter') { handleAdd() } }}
                placeholder={placeholder}
                onChange={e => setState(e.target.value)} />

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
                  <span key={getId()} data-index={i}>{String(item)}<button onClick={() => onRemove?.(i)} className={css.actionButton}><DeleteIcon /></button></span>
              )
            }
          </div>}
      </div>
    </div>
  </Suspense>
}

export default CrudList;
