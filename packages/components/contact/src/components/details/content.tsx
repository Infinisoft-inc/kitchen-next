/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { AddressIcon, PhoneIcon, RelatedwithIcon, WebIcon } from '@/assets/svg';
import { useItem } from '@/hooks/useItem';
import React from 'react';
import css from './index.module.css';

const Chip = React.lazy(() => import(/*  webpackPreload: true */ /* webpackChunkName: 'Chip' */ 'chip/Chip'))
const InputText = React.lazy(() => import(/* webpackPreload: true */ /*  webpackChunkName: 'InputText'*/ 'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ /*  webpackChunkName: 'CrudList'*/ 'crudlist/CrudList'))
const AvatarUpload = React.lazy(() => import(/* webpackPreload: true */ /*  webpackChunkName: 'AvatarUpload' */ 'avatarupload/AvatarUpload'))

export type ContentProps = {
  SK: string
  onClose?: () => void
};


export const Content = ({ SK, onClose }: ContentProps) => {
  const { item: contact, inputMutator, listMutatorsFactory, mutation, remove } = useItem(SK)

  const props = (field: keyof API.Item) => ({
    name: field,
    defaultValue: contact?.[field] ? String(contact?.[field]) : '',
    onChange: inputMutator(field)
  })

  return <span key={SK}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <AvatarUpload src={contact?.avatar} save={base64 => mutation('avatar', base64)} />
        <p>
          <InputText {...props('name')} inverse containerClass={css.block} inputClass={css.name} />
          <InputText {...props('email')} inverse containerClass={css.block} inputClass={css.email} />
        </p>
      </div>
    </div>

    <div className={css.content}>
      <span className={css.categoryContainer}>
        <Chip>{SK?.split('__')?.[0] ?? ''}</Chip>
        <Chip>{contact?.Subcategory ?? ''}</Chip>
      </span>

      <span className={css.detailsContainer}>
        <InputText before={<AddressIcon />} {...props('address')} label='Address' placeholder='66 Yale Road' />
        <InputText before={<WebIcon />} {...props('website')} label='Website' placeholder='www.contact.com' />

        <CrudList icon={<PhoneIcon />} placeholder={'(514) 864-5742'} onAdd={listMutatorsFactory('telephones').add} onChange={listMutatorsFactory('telephones').update} itemList={contact?.telephones} itemRender={(item: string, i: number) => <Chip key={`telephone-${i}`} onRemove={() => listMutatorsFactory('telephones').remove(i)}>{item}</Chip>} />

        <CrudList icon={<RelatedwithIcon />} placeholder={'Relation ?'} onAdd={listMutatorsFactory('relatedWith').add} onChange={listMutatorsFactory('relatedWith').update} itemList={contact?.relatedWith} itemRender={(item: string, i: number) => <Chip key={`relatedWith-${i}`} onRemove={() => listMutatorsFactory('relatedWith').remove(i)}>{item}</Chip>} />
      </span>
    </div>

    <div style={{ display: "flex", justifyContent: 'center' }} onClick={() => { remove(); onClose?.() }}><button style={{ color: "red" }}>Delete</button></div>
  </span>

}
export default Content


