/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useSearchFilter } from '@/hooks';
import { useItem } from '@/hooks/useItem';

import React, { HTMLAttributes } from 'react';
import { StepsActions } from '../content';
import css from './index.module.css';

const Toggle = React.lazy(() => import(/* webpackChunkName: 'Toggle' */ 'toggle/Toggle'))
const Search = React.lazy(() => import(/* webpackChunkName: 'Search' */ '@/components/toolbar/search'))

type CategoryProps = Partial<HTMLAttributes<HTMLDivElement>> & StepsActions

export const Category = ({ hidden, next, id }: CategoryProps) => {
  const { onMutation, item } = useItem(id)
  const categories = useSearchFilter({
    source: "meta",
    _selector: _state => _state?.meta?.categories
  }) as Record<string, number>

  return <span key={id} hidden={hidden}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.headerTitle}>Category</h2>
        <p>What type of contact is it?</p>
      </div>
    </div>

    <div className={css.content}>
      <span className={css.detailsContainer}>
        <Toggle onClick={() => next()} toggles={Object.keys(categories ?? {})} clickHandler={onMutation('Categories')} key='Categories' />
        <p>Not there? search or create one</p>
        <Search source='meta' />
      </span>
    </div>
  </span>

}
export default Category


