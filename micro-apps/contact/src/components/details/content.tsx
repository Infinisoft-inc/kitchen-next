/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { AddressIcon, EmailIcon, NameIcon, PhoneIcon, RelatedwithIcon, WebIcon } from '@/assets/svg';
import React from 'react';
import AvatarUpload from '../avatar-upload';
import { useItem } from '../store/src/useItem';
import css from './index.module.css';

const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))

export type ContentProps = {
  SK: string
};


export const Content = ({ SK }: ContentProps) => {
  const { item: contact, inputMutator, listMutator } = useItem(SK)

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
        <h2>Header</h2>

        <AvatarUpload save={function (bse64: string): void {
          throw new Error('Function not implemented.');
        }} />
        <InputText before={<NameIcon />} {...props('name')} />
        <InputText before={<EmailIcon />} {...props('email')} />

      </div>
    </div>

    <div className={css.content}>
      <InputText before={<AddressIcon />} {...props('address')} />
      <InputText before={<WebIcon />} {...props('website')} />

      <CrudList title='telephones' icon={<PhoneIcon />} {...listMutator('telephones')} itemList={contact?.telephones} />
      <CrudList title='relatedwith' icon={<RelatedwithIcon />} {...listMutator('relatedWith')} itemList={contact?.relatedWith} />
    </div>
  </span>

}
export default Content


