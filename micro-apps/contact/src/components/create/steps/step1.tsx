/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { AddressIcon, EmailIcon, NameIcon, PhoneIcon } from '@/assets/svg';
import Chip from '@/components/chip';
import { useItem } from '@/components/store/src/useItem';
import React, { HTMLAttributes } from 'react';
import css from './index.module.css';

const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))
const AvatarUpload = React.lazy(() => import(/* webpackChunkName: 'AvatarUpload' */ '../../avatar-upload'))

export type Step1 = Partial<HTMLAttributes<HTMLDivElement>> & {
  SK: string
};


export const Step1 = ({ SK, hidden }: Step1) => {
  const { item: contact, inputMutator, listMutator, useMutator } = useItem(SK)

  console.log(`Create Content SK = `, SK)
  console.log(`Create Content contact = `, contact)

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
        {/* <AvatarUpload src={contact?.avatar} save={base64 => useMutator('avatar', base64)} /> */}
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


