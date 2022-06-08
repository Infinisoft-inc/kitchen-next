/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */
import React, { Suspense } from 'react';
import { AddIcon } from './assets/svg';
import css from './index.module.css';
import { CrudListProps } from './types';

const InputText = React.lazy(() => import(/* webpackPrefetch: true */'inputtext/InputText'));
const FlexContainer = React.lazy(() => import(/* webpackPrefetch: true */'flexcontainer/FlexContainer'));
const FlexItem = React.lazy(() => import(/* webpackPrefetch: true */'flexitem/FlexItem'));

export const CrudList = ({
  title,
  icon,
  itemList = [],
  onAdd,
  onChange,
  onRemove,
  name,
  ...props
}: CrudListProps) => {

  return <Suspense>
    <div data-style='input:text:container'>

      <FlexContainer>
        <FlexItem>{icon}</FlexItem>
        <FlexItem>
          <div className={css.list}>
            <div className={css.header}>
              {title}

              <button onClick={() => { onAdd('Insert here') }}><AddIcon /></button>
            </div>
            <div className={css.content}>
              {
                itemList?.map(
                  (item, i: number) => {
                    return <InputText key={i} defaultValue={String(item)} id={name + `${i}`} onChange={e => onChange(i, e.target.value)} data-index={i} name={name + `${i}`} onRemove={() => onRemove(i)} removable />
                  }
                )
              }
            </div>
          </div>
        </FlexItem>
      </FlexContainer>
    </div>
  </Suspense>
}

export default CrudList;
