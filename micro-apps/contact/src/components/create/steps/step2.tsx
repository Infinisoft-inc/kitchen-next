/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { RelatedwithIcon, WebIcon } from '@/assets/svg';
import Chip from '@/components/chip';
import { useItem } from '@/components/store/src/useItem';
import React, { HTMLAttributes } from 'react';
import css from './index.module.css';

const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))
const AvatarUpload = React.lazy(() => import(/* webpackChunkName: 'AvatarUpload' */ '../../avatar-upload'))

export type Step2Props = Partial<HTMLAttributes<HTMLDivElement>> & {
  SK: string
};


export const Step2 = ({ SK, hidden }: Step2Props) => {
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
        <h2 className={css.headerTitle}>Category</h2>
      </div>
    </div>

    <div className={css.content}>

      <span className={css.detailsContainer}>

        <span className={css.categoryContainer}>
          <Chip>Person</Chip>
          <Chip>Friend</Chip>
        </span>

        <InputText before={<WebIcon />} {...props('website')} />

        <CrudList icon={<RelatedwithIcon />} placeholder={'Relation ?'} {...listMutator('relatedWith')} itemList={contact?.relatedWith} itemRender={(item: string, i: number) => <Chip key={`relation${i}`} onRemove={() => listMutator('relatedWith').onRemove(i)}>{item}</Chip>} />
      </span>
    </div>
  </span>

}
export default Step2


