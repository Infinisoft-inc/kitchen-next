/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { RelatedwithIcon, WebIcon } from '@/assets/svg';
import { useMicroContext } from '@/context/micro';
import { useItem } from '@/hooks/useItem';
import React, { HTMLAttributes } from 'react';
import css from './index.module.css';

const Chip = React.lazy(() => import(/* webpackChunkName: 'Chip' */ 'chip/Chip'))
const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))
const AvatarUpload = React.lazy(() => import(/* webpackChunkName: 'AvatarUpload' */ 'avatarupload/AvatarUpload'))

export type Step2Props = Partial<HTMLAttributes<HTMLDivElement>> & {
  SK: string
};


export const Step2 = ({ SK, hidden }: Step2Props) => {
  const {store} = useMicroContext()
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
        <h2 className={css.headerTitle}>Category</h2>
      </div>
    </div>

    <div className={css.content}>
      <span className={css.detailsContainer}>
        <InputText before={<WebIcon />} {...props('website')} />

        <CrudList icon={<RelatedwithIcon />} placeholder={'Relation ?'} onAdd={listMutatorsFactory('relatedWith').add} onChange={listMutatorsFactory('relatedWith').update} itemList={contact?.relatedWith} itemRender={(item: string, i: number) => <Chip key={`relatedWith${i}`} onRemove={() => listMutatorsFactory('relatedWith').remove(i)}>{item}</Chip>} />
      </span>
    </div>
  </span>

}
export default Step2


