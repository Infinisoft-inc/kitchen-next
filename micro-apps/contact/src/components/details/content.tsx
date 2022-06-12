/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { AddressIcon, PhoneIcon, RelatedwithIcon, WebIcon } from '@/assets/svg';
import { useMicroContext } from '@/context/micro';
import React from 'react';
import { useItem } from '../../context/useItem';
import css from './index.module.css';

const Chip = React.lazy(() => import(/*  webpackPreload: true */ /* webpackChunkName: 'Chip' */ '../../package/mychip'))
const InputText = React.lazy(() => import(/* webpackPreload: true */ /*  webpackChunkName: 'InputText'*/ 'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ /*  webpackChunkName: 'CrudList'*/ 'crudlist/CrudList'))
const AvatarUpload = React.lazy(() => import(/* webpackPreload: true */ /*  webpackChunkName: 'AvatarUpload' */ '../../package/avatar-upload'))

export type ContentProps = {
  SK: string
  onClose?: () => void
};


export const Content = ({ SK, onClose }: ContentProps) => {
  const {store} = useMicroContext()
  const { item: contact, inputMutator, listMutator, useMutator, destroy } = useItem(SK)

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

      {/* @ts-ignore */}
        <AvatarUpload src={contact?.avatar} save={base64 => useMutator('avatar', base64)} />
        <InputText {...props('name')} />
        <InputText {...props('email')} />

      </div>
    </div>

    <div className={css.content}>
      <span className={css.categoryContainer}>
        <Chip>Person</Chip>
        <Chip>Friend</Chip>
      </span>

      <span className={css.detailsContainer}>
        <InputText before={<AddressIcon />} {...props('address')} multiline />
        <InputText before={<WebIcon />} {...props('website')} />

        <CrudList icon={<PhoneIcon />} placeholder={'(514) 864-5742'} {...listMutator('telephones')} itemList={contact?.telephones} itemRender={(item: string, i: number) => <Chip key={`telephone${i}`} onRemove={() => listMutator('telephones').onRemove(i)}>{item}</Chip>} />

        <CrudList icon={<RelatedwithIcon />} placeholder={'Relation ?'} {...listMutator('relatedWith')} itemList={contact?.relatedWith} itemRender={(item: string, i: number) => <Chip key={`relation${i}`} onRemove={() => listMutator('relatedWith').onRemove(i)}>{item}</Chip>} />
      </span>
    </div>

    <div style={{ display: "flex", justifyContent: 'center' }} onClick={() => { destroy(); onClose?.() }}><button style={{ color: "red" }}>Delete</button></div>
  </span>

}
export default Content


