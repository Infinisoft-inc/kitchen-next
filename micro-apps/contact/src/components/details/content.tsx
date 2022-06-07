/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';
import { useItem } from '../store/src/useItem';
import css from './index.module.css';

const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));
const CrudList = React.lazy(()=>import(/* webpackPreload: true */ 'crudlist/CrudList'))

export type ContentProps = {
  SK: string
};


export const Content = ({ SK }: ContentProps) => {
  const { item: contact, inputMutator, listMutator } = useItem(SK)

  const props = (field: keyof API.Item) => ({
    className: 'invariant',
    placeholder: field,
    name: field,
    defaultValue: contact?.[field] ? String(contact?.[field]):'',
    onChange: inputMutator(field)
  })

  return <span key={SK}>
    <div className={css.headerContent}>
      <h2>Header</h2>

      <InputText {...props('name')} />
      <InputText {...props('email')} />

    </div>

    <div className={css.content}>
      <InputText {...props('address')} />
      <InputText {...props('website')} />

      <CrudList title='telephones' icon={undefined} {...listMutator('telephones')} itemList={contact?.telephones ?? []} />
    </div>
  </span>

}
export default Content


