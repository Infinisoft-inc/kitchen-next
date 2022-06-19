/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import { useCreateItem } from '@/hooks/useItem';

import React, { HTMLAttributes } from 'react';
import { StepsActions } from '../content';
import css from './index.module.css';

const Toggle = React.lazy(() => import(/* webpackChunkName: 'Toggle' */ 'toggle/Toggle'))

export type SubcategoryProps = Partial<HTMLAttributes<HTMLDivElement>> & StepsActions & {
  SK: string
};

const Subcategory = ({ hidden, next }: SubcategoryProps) => {
  const { store } = useMicroContext()
  const { onMutation, item } = useCreateItem()

  const subCategories = Object.keys(store?.getState?.()?.meta?.subCategories ?? {})

  return <span key={item?.SK} hidden={hidden}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.headerTitle}>Category</h2>
      </div>
    </div>

    <div className={css.content}>
      <span className={css.detailsContainer}>
        <Toggle onClick={() => next()} toggles={subCategories} clickHandler={onMutation('SubCategories')} key='subcategories' />
      </span>
    </div>
  </span>

}
export default Subcategory


