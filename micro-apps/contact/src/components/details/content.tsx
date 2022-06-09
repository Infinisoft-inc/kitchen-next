/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { AddressIcon, PhoneIcon, RelatedwithIcon, WebIcon } from '@/assets/svg';
import React from 'react';
import { useItem } from '../store/src/useItem';
import css from './index.module.css';

const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))
const AvatarUpload = React.lazy(() => import(/* webpackChunkName: 'AvatarUpload' */ '../avatar-upload'))

export type ContentProps = {
  SK: string
};


export const Content = ({ SK }: ContentProps) => {
  const { item: contact, inputMutator, listMutator, useMutator } = useItem(SK)

  const props = (field: keyof API.Item) => ({
    className: 'invariant',
    placeholder: field,
    name: field,
    defaultValue: contact?.[field] ? String(contact?.[field]) : '',
    onChange: inputMutator(field)
  })

  return <span key={SK}>
    <div className={css.header}>
      <div className={css.headerContent}>


        <AvatarUpload src={contact?.avatar} save={base64 => useMutator('avatar', base64)} />
        <InputText {...props('name')} />
        <InputText {...props('email')} />

      </div>
    </div>

    <div className={css.content}>
      <InputText before={<AddressIcon />} {...props('address')} multiline />
      <InputText before={<WebIcon />} {...props('website')} />

      <CrudList listTitle={<h6 className={css.listTitle}>Telephones</h6>} icon={<PhoneIcon />} {...listMutator('telephones')} itemList={contact?.telephones} />

      <CrudList listTitle={<h6 className={css.listTitle}>Relation</h6>} icon={<RelatedwithIcon />} {...listMutator('relatedWith')} itemList={contact?.relatedWith} />
    </div>
  </span>

}
export default Content


