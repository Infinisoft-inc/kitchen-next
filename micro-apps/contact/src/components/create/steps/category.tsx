/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';

import React, { HTMLAttributes } from 'react';
import css from './index.module.css';

const Chip = React.lazy(() => import(/* webpackChunkName: 'Chip' */ 'chip/Chip'))
const InputText = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'inputtext' */'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'crudlist' */'crudlist/CrudList'))

export type CategoryProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  SK: string
};

export const Category = ({ SK, hidden }: CategoryProps) => {
  const {store} = useMicroContext()


  return <span key={SK} hidden={hidden}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.headerTitle}>Category</h2>
      </div>
    </div>

    <div className={css.content}>

      <span className={css.detailsContainer}>

      </span>
    </div>
  </span>

}
export default CategoryProps


