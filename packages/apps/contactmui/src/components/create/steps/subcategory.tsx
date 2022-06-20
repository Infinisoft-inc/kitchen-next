/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from "@/context";
import { useItem } from "@/hooks";
import { useSearchFilter } from '@/hooks/useSearchFilter';

import React, { HTMLAttributes } from 'react';
import { StepsActions } from '../content';
import css from './index.module.css';

const Toggle = React.lazy(() => import(/* webpackChunkName: 'Toggle' */ 'toggle/Toggle'))
const Search = React.lazy(() => import(/* webpackChunkName: 'Search' */ '@/components/toolbar/search'))

export type SubcategoryProps = Partial<HTMLAttributes<HTMLDivElement>> & StepsActions & {
  id: string
};

const Subcategory = ({ hidden, next, id }: SubcategoryProps) => {
  const { store } = useMicroContext()
  const { item, onMutation } = useItem(id)
  const subCategories = useSearchFilter({
    source: "meta",
    _selector: _state => _state?.meta?.subCategories
  }) as Record<string, number>

  return <span key={item?.SK} hidden={hidden}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.headerTitle}>Subcategory</h2>
      </div>
    </div>

    <div className={css.content}>
      <span className={css.detailsContainer}>
        <Toggle onClick={() => next()} toggles={Object.keys(subCategories ?? {})} clickHandler={onMutation('Subcategory')} key='Subcategory' />
        <Search source='meta' />
      </span>
    </div>
  </span>

}
export default Subcategory


