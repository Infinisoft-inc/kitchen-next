/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { RelatedwithIcon, WebIcon } from '@/assets/svg';
import { getId } from '@/helpers';
import { useItem } from '@/hooks/useItem';
import React, { HTMLAttributes } from 'react';
import css from './index.module.css';

const Chip = React.lazy(() => import(/* webpackChunkName: 'Chip' */ 'chip/Chip'))
const InputText = React.lazy(() => import(/*   */ /* webpackChunkName: 'InputText' */'inputtext/InputText'));
const ListCrud = React.lazy(() => import(/*   */ /*  webpackChunkName: 'CrudList'*/ '@/packages/listcrud/src/component'))

export type RelationsProps = Partial<HTMLAttributes<HTMLDivElement>> & {
  id: string
};

export const Relations = ({ id, hidden }: RelationsProps) => {
  const { item: contact, inputMutator, listMutatorsFactory } = useItem(id)

  const props = (field: string) => ({
    placeholder: field,
    name: field,
    value: contact?.[field] ? String(contact?.[field]) : '',
    onChange: inputMutator(field)
  })

  return <span key={id} hidden={hidden}>
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.headerTitle}>Additional Information</h2>
      </div>
    </div>

    <div className={css.content}>
      <span className={css.detailsContainer}>
        <InputText before={<WebIcon />} {...props('website')} />

        <ListCrud icon={<RelatedwithIcon />} placeholder={'Relation ?'} onAdd={listMutatorsFactory('relatedWith').add} onChangeItem={listMutatorsFactory('relatedWith').update} itemList={contact?.relatedWith} itemRender={(item: string, i: number) => <Chip key={getId()} onRemove={() => listMutatorsFactory('relatedWith').remove(i)}>{item}</Chip>} />
      </span>
    </div>
  </span>

}
export default Relations


