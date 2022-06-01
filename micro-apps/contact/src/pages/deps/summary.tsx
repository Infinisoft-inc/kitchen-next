/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
// import { load } from '@infini-soft/lib-federation';
import { Tag, Typography } from 'antd';
import React, { Suspense, useId, useSyncExternalStore } from 'react';
// import type { Store } from "store/types";
import { useMicroContext } from '../../context/micro';
import { PhoneIcon } from '../assets/svg';
import css from './index.css';

const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))


type SummaryProps = {
  values: API.Item | null,
  errors?: string[]
  hide?: string[]
  editable?: boolean
  variant?: 'horizontal' | 'vertical'
}

const Summary: React.FC<SummaryProps> = ({ hide = [], editable = true, errors = [], values, variant = 'vertical' }) => {
  const _hide = hide.join(' ')
  const {  store } = useMicroContext()
  const item = useSyncExternalStore(store.subscribe, store.getNormalizedState)
  const { itemSelectedId } = useSyncExternalStore(store.subscribe, store.getSnapshot)

  const contact = item.get(itemSelectedId ?? '')

  const isError = errors.length > 0
  const id = useId()

  // const onChange = (field: string) => ({
  //   onChange: (val: string) => {
  //     model?.item.onChange({ ...model.item.draft, [field]: val }, "summary")
  //     // model?.item.commit.run()
  //   }
  // })

  // console.log(`summary() item  normalized = `, item)
  // if (itemSelectedId) {
  //   console.log(`summary() selected item  normalized = `, item.get(itemSelectedId))
  // }

  // const onChangeList = (_field: keyof API.Item) => (val: string, index?: number) => {
  //   if (model?.item?.draft?.[_field] && Array.isArray(model?.item?.draft?.[_field])) {
  //     model?.item.onChange({ ...model?.item?.draft, [_field]: (model?.item?.draft?.[_field] as any[]).map((item, idx) => idx === index ? val : item) }, "crudlist")
  //   }
  // }
  // const onAddList = (_field: keyof API.Item) => () => {
  //   model?.item.onChange({ ...model.item.draft, [_field]: ['Insert here', ...(model?.item?.draft?.[_field] as any[] || [])] }, "crudlist")
  // }

  // const onDelete = (_field: keyof API.Item) => (i: number) => () => {
  //   if (model?.item?.draft?.[_field] && Array.isArray(model?.item?.draft?.[_field])) {
  //     model.item?.onChange({ ...model.item.draft, [_field]: (model?.item?.draft?.[_field] as any[]).filter((_, idx) => idx !== i) }, "crudlist")
  //   }
  // }

  const onAdd = () => {
    store.mutate(_state => {
      contact?.telephones?.push('NEW PHONE')
      return { ..._state }
    })
  }

  const onRemove = (index: number) => {
    store.mutate(_state => ({ ..._state }))
    delete contact?.telephones?.[index]
  }



  const onChangeTmp = (field: keyof API.Item, newVal: any) => {
    store.mutate(_state => {
      if (contact?.[field]) {
        contact[field] = newVal
      }
      return { ..._state }
    })
  }

  const configInput = (field: keyof API.Item) => {
    return {
      value: contact?.[field] ?? 'Insert here',
      onChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => onChangeTmp(field, e?.target.value),
      copyable: false,
    }
  }


  return <div className={css[`summary-${variant}`] + ` invariant`}>
    {
      isError && <ol style={{ textAlign: 'left' }}>
        <Typography.Text type='danger' style={{ marginBottom: '1rem' }}>
          Please fix these errors:
        </Typography.Text>
        {errors?.map((e) => {
          return <li key={`${e}${id}`}>
            {e}
          </li>
        })}
      </ol>
    }

    {!isError && <>



      {!_hide.includes('Subcategory') && values?.SK && values?.Subcategory &&
        // <ContactDetail className='invariant' onChange={onChange('Subcategory')} title='Category' icon={<CategoryIcon size={24} />} content={
        <span>
          <Tag>
            <Typography.Text className='invariant'>
              {values?.SK?.split('__')?.[0] ?? ''}
            </Typography.Text>
          </Tag>
          <Tag>
            <Typography.Text className='invariant'>{values?.Subcategory}</Typography.Text>
          </Tag>
        </span>
        // } />
      }

      <Suspense fallback='telephones'>
        <CrudList title={'Telephones'} icon={<PhoneIcon />} list={contact?.telephones ?? []} onAdd={onAdd} onChange={() => onChangeTmp} onRemove={() => onRemove(1)} />
      </Suspense>

      {/*
      {!_hide.includes('relatedWith') && <CrudList list={model?.item?.draft?.relatedWith ?? []} onDelete={onDelete('relatedWith')} onChange={onChangeList('relatedWith')} readonly={!editable} icon={<RelatedwithIcon />} onAdd={onAddList('relatedWith')} onRender={(obj: any) => obj?.label ?? obj} className='invariant' title='Relation' field='relatedWith' />} */}
    </>}
  </div>;
}
export default Summary

