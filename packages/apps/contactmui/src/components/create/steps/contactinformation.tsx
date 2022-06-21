/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { AddressIcon, EmailIcon, NameIcon, PhoneIcon } from '@/assets/svg';
import { useItem } from '@/hooks/useItem';
import { Item } from '@/models';
import React, { HTMLAttributes } from 'react';
import css from './index.module.css';

const Chip = React.lazy(() => import(/* webpackChunkName: 'Chip' */ 'chip/Chip'))
const InputText = React.lazy(() => import(/*   */ /* webpackChunkName: 'inputtext' */'inputtext/InputText'));
const ListCrud = React.lazy(() => import(/*   */ /*  webpackChunkName: 'CrudList'*/ '@/packages/listcrud/src/component'))

export type ContactInformation = Partial<HTMLAttributes<HTMLDivElement>> & {
  id: string
};

export const ContactInformation = ({id, hidden }: ContactInformation) => {
  const { item: contact, inputMutator, listMutatorsFactory } = useItem(id)

  const props = (field: keyof Item) => ({
    placeholder: field,
    name: field,
    value: contact?.[field] ? String(contact?.[field]) : '',
    onChange: inputMutator(field)
  })

  return <span key={id} hidden={hidden}>
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

        <ListCrud icon={<PhoneIcon />} label='Telephones' placeholder={'(514) 864-5742'} onAdd={listMutatorsFactory('telephones').add} onChangeItem={listMutatorsFactory('telephones').update} itemList={contact?.telephones ?? []} onRemove={(i) => listMutatorsFactory('telephones').remove(i)} />

      </span>
    </div>
  </span>

}
export default ContactInformation


