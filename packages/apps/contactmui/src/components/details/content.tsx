/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { AddressIcon, PhoneIcon, RelatedwithIcon, WebIcon } from '@/assets/svg';
import { useItem } from '@/hooks/useItem';
import { Item } from '@/models';
import React from 'react';
import css from './index.module.css';

const Chip = React.lazy(() => import(/*   */ /* webpackChunkName: 'Chip' */ '@mui/material/Chip/Chip'))
const Button = React.lazy(() => import(/*   */ /* webpackChunkName: 'Chip' */ '@mui/material/Button/Button'))
const InputText = React.lazy(() => import(/*   */ /*  webpackChunkName: 'InputText'*/ 'inputtext/InputText'));
const ListCrud = React.lazy(() => import(/*   */ /*  webpackChunkName: 'CrudList'*/ '@/packages/listcrud/src/component'))
const AvatarUpload = React.lazy(() => import(/*   */ /*  webpackChunkName: 'AvatarUpload' */ 'avatarupload/AvatarUpload'))

export type ContentProps = {
  id: string
  onClose?: () => void
};


export const Content = ({ id, onClose }: ContentProps) => {
  const { item: contact, inputMutator, listMutatorsFactory, mutation, remove } = useItem(id)

  const props = (field: keyof Item) => ({
    name: field,
    defaultValue: contact?.[field] ? String(contact?.[field]) : '',
    onChange: inputMutator(field)
  })

  return <span key={id}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <AvatarUpload src={contact?.avatar} save={base64 => mutation('avatar', base64)} />
        <span>
          <InputText {...props('name')} placeholder='Name' inverse containerClass={css.block} inputClass={css.name} />
          <InputText {...props('email')} placeholder='Email' inverse containerClass={css.block} inputClass={css.email} />
        </span>
      </div>
    </div>

    <div className={css.content}>
      <span className={css.categoryContainer}>
        <Chip variant='filled' color='primary' label={contact?.Categories} />
        {contact?.Subcategory && <Chip variant='filled' color='primary' label={contact?.Subcategory} />}
      </span>

      <span className={css.detailsContainer}>
        <InputText before={<AddressIcon />} {...props('address')} label='Address' placeholder='66 Yale Road' />
        <InputText before={<WebIcon />} {...props('website')} label='Website' placeholder='www.contact.com' />

        <ListCrud icon={<PhoneIcon />} label='Telephones' placeholder={'(514) 864-5742'} onAdd={listMutatorsFactory('telephones').add} onChangeItem={listMutatorsFactory('telephones').update} itemList={contact?.telephones} onRemove={listMutatorsFactory('telephones').remove} />

        <ListCrud icon={<RelatedwithIcon />} label='Relation' placeholder={'Ex: Case0112'} onAdd={listMutatorsFactory('relatedWith').add} onChangeItem={listMutatorsFactory('relatedWith').update} itemList={contact?.relatedWith} onRemove={listMutatorsFactory('relatedWith').remove} />
      </span>
    </div>

    <div style={{ display: "flex", justifyContent: 'center' }} onClick={() => { remove(); onClose?.() }}>
      <Button variant='outlined' color='error'>Delete</Button>
    </div>
  </span>

}
export default Content


