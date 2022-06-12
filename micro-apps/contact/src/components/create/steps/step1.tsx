/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { AddressIcon, EmailIcon, NameIcon, PhoneIcon } from '@/assets/svg';

import React, { HTMLAttributes } from 'react';
import { useItem } from '../../../context/useItem';
import css from './index.module.css';

const Chip = React.lazy(() => import(/* webpackChunkName: 'Chip' */ '@/package/mychip'))
const InputText = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'inputtext' */'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'crudlist' */'crudlist/CrudList'))

export type Step1 = Partial<HTMLAttributes<HTMLDivElement>> & {
  SK: string
};

export const Step1 = ({ SK, hidden }: Step1) => {
  const { item: contact, inputMutator, listMutator } = useItem(SK)

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
        <InputText before={<NameIcon />} className={css.name} {...props('name')} />
        <InputText before={<EmailIcon />} className={css.email} {...props('email')} />
        <InputText before={<AddressIcon />} {...props('address')} multiline />

        <CrudList icon={<PhoneIcon />} placeholder={'(514) 864-5742'} {...listMutator('telephones')} itemList={contact?.telephones ?? ['']} itemRender={(item: string, i: number) => <Chip key={`telephone${i}`} onRemove={() => listMutator('telephones').onRemove(i)}>{item}</Chip>} />

      </span>
    </div>
  </span>

}
export default Step1


