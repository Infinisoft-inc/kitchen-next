/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */
import { getId } from '@/helpers';
import React, { startTransition, Suspense, useRef } from 'react';
import { AddIcon, PhoneIcon } from './assets/svg';
import css from './index.module.css';
import { ListCrudProps } from './types';

const InputText = React.lazy(() => import('inputtext/InputText'));
const Chip = React.lazy(() => import('@mui/material/Chip/Chip'));
const IconButton = React.lazy(() => import('@mui/material/IconButton/IconButton'));

export const ListCrud = ({
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
}: ListCrudProps) => {
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
                before={<PhoneIcon />}
                after={<IconButton onClick={handleAdd}><AddIcon /></IconButton>}
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
                  <Chip key={getId()} data-index={i} label={String(item)} onDelete={() => onRemove?.(i)} />
              )
            }
          </div>}
      </div>
    </div>
  </Suspense>
}

export default ListCrud;
