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
const InputText = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'inputtext' */'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'crudlist' */'crudlist/CrudList'))

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
        <InputText before={<NameIcon />} className={css.name} {...props('name')}/>
        <InputText before={<EmailIcon />} className={css.email} {...props('email')} />
        <InputText before={<AddressIcon />} {...props('address')} multiline />

        <CrudList icon={<PhoneIcon />} placeholder={'(514) 864-5742'} onAdd={listMutatorsFactory('telephones').add} onChangeItem={listMutatorsFactory('telephones').update} itemList={contact?.telephones ?? []} itemRender={(item: string, i: number) => <Chip key={`telephone${i}`} onRemove={() => listMutatorsFactory('telephones').remove(i)}>{item}</Chip>} />

      </span>
    </div>
  </span>

}
export default ContactInformation


