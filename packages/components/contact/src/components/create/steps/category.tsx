/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import { useCreateItem } from '@/hooks/useItem';
import InputText from 'inputtext/InputText';

import React, { HTMLAttributes } from 'react';
import { StepsActions } from '../content';
import css from './index.module.css';

const Toggle = React.lazy(() => import(/* webpackChunkName: 'Toggle' */ 'toggle/Toggle'))

type CategoryProps = Partial<HTMLAttributes<HTMLDivElement>> & StepsActions & {
  SK: string
}

export const Category = ({ hidden, next }: CategoryProps) => {
  const { store } = useMicroContext()
  const { onMutation, item } = useCreateItem()

  const categories = Object.keys(store?.getState?.()?.meta?.categories ?? {})

  return <span key={item?.SK} hidden={hidden}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.headerTitle}>Category</h2>
        <p>What type of contact is it?</p>
      </div>
    </div>

    <div className={css.content}>
      <span className={css.detailsContainer}>
        <Toggle onClick={()=>next()} toggles={categories} clickHandler={onMutation('SK')} key='categories' />
        <p>Not there? search or create one</p>
        <InputText label='Search' />
      </span>
    </div>
  </span>

}
export default Category


