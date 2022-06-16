/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import { useCreateItem } from '@/hooks/useItem';

import React, { HTMLAttributes } from 'react';
import css from './index.module.css';

const Chip = React.lazy(() => import(/* webpackChunkName: 'Chip' */ 'chip/Chip'))
const InputText = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'inputtext' */'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'crudlist' */'crudlist/CrudList'))
const Toggle = React.lazy(() => import(/* webpackChunkName: 'Toggle' */ 'toggle/Toggle'))

export type CategoryProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  SK: string
};

export const Category = ({ hidden }: CategoryProps) => {
  const { store } = useMicroContext()
  const { onMutation, item } = useCreateItem()

  const categories = Object.keys(store?.getState?.()?.meta?.categories ?? {})

  return <span key={item?.SK} hidden={hidden}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.headerTitle}>Category</h2>
      </div>
    </div>

    <div className={css.content}>

      <span className={css.detailsContainer}>
        <Toggle toggles={categories} clickHandler={onMutation('SK')} key='categories' />
      </span>
    </div>
  </span>

}
export default CategoryProps


