/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { AddressIcon, EmailIcon, NameIcon, PhoneIcon } from '@/assets/svg';
import { useItem } from '@/hooks/useItem';
import React, { HTMLAttributes } from 'react';
import css from './index.module.css';

const Chip = React.lazy(() => import(/* webpackChunkName: 'Chip' */ 'chip/Chip'))
const InputText = React.lazy(() => import(/*   */ /* webpackChunkName: 'inputtext' */'inputtext/InputText'));
const CrudList = React.lazy(() => import(/*   */ /* webpackChunkName: 'crudlist' */'crudlist/CrudList'))

export type ContactInformation = Partial<HTMLAttributes<HTMLDivElement>> & {
  SK: string
};

export const ContactInformation = ({ SK, hidden }: ContactInformation) => {
  const { item: contact, inputMutator, listMutatorsFactory } = useItem(SK)

  const props = (field: keyof API.Item) => ({
    placeholder: field,
    name: field,
    value: contact?.[field] ? String(contact?.[field]) : '',
    onChange: inputMutator(field)
  })

  return <span key={SK} hidden={hidden}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.headerTitle}>Contact</h2>
      </div>
    </div>

    <div className={css.content}>

      <span className={css.detailsContainer}>
        <InputText before={<NameIcon />} {...props('name')} label='Name' placeholder='John Doe' />
        <InputText before={<EmailIcon />} {...props('email')} label='Email' placeholder='my@mail.com' />
        <InputText before={<AddressIcon />} {...props('address')} label='Address' placeholder='66 Yale Road' />

        <CrudList icon={<PhoneIcon />} label='Telephones' placeholder={'(514) 864-5742'} onAdd={listMutatorsFactory('telephones').add} onChangeItem={listMutatorsFactory('telephones').update} itemList={contact?.telephones ?? []} onRemove={(i) => listMutatorsFactory('telephones').remove(i)} />

      </span>
    </div>
  </span>

}
export default ContactInformation


