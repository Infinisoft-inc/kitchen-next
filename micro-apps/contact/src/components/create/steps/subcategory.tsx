/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import { useCreateItem } from '@/context/useItem';

import React, { HTMLAttributes } from 'react';
import css from './index.module.css';

const Chip = React.lazy(() => import(/* webpackChunkName: 'Chip' */ 'chip/Chip'))
const InputText = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'inputtext' */'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'crudlist' */'crudlist/CrudList'))
const Toggle = React.lazy(() => import(/* webpackChunkName: 'Toggle' */ 'toggle/Toggle'))

export type SubcategoryProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  SK: string
};

export const Subcategory = ({ hidden }: SubcategoryProps) => {
  const { store } = useMicroContext()
  const { onMutation, item } = useCreateItem()

  const subCategories = Object.keys(store?.getState?.()?.meta?.subCategories ?? {})

  return <span key={item?.SK} hidden={hidden}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.headerTitle}>Subcategory</h2>
      </div>
    </div>

    <div className={css.content}>

      <span className={css.detailsContainer}>
        <Toggle toggles={subCategories} clickHandler={onMutation('SubCategories')} key='subcategories' />
      </span>
    </div>
  </span>

}
export default SubcategoryProps


