/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { load } from '@infini-soft/lib-federation';
import { Tag, Typography } from 'antd';
import React, { Suspense, useId } from 'react';
import type { Store } from "store/types";
import { useMicroContext } from '../../context/micro';
import { AddressIcon, EmailIcon, NameIcon, WebIcon } from '../assets/svg';
import AvatarUpload from '../components/avatar-upload';
import css from './index.css';

import(/* webpackPreload: true */ 'store/createstore')
const createstore: Store = await load('store', 'createstore')

const ContactDetail = React.lazy(() => import('contactdetails/ContactDetails'))
const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))
const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));


type SummaryProps = {
  values: API.Item | null,
  errors?: string[]
  hide?: string[]
  editable?: boolean
  variant?: 'horizontal' | 'vertical'
}

const Summary: React.FC<SummaryProps> = ({ hide = [], editable = true, errors = [], values, variant = 'vertical' }) => {
  const _hide = hide.join(' ')
  const isEditable = (fieldName: string) => editable ? fieldName : undefined
  const { model, store, list } = useMicroContext()
  const isError = errors.length > 0
  const id = useId()
  const onChange = (field: string) => ({
    onChange: (val: string) => {
      model?.item.onChange({ ...model.item.draft, [field]: val }, "summary")
      // model?.item.commit.run()
    }
  })

  console.log(`values `, values)

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

      {!_hide.includes('avatar') &&
        <AvatarUpload src={values?.avatar} save={(_avatar) => {
          model?.item.onChange({ ...model.item.draft, avatar: _avatar })
          model?.operations.update.run({ ...model.item.draft })
        }} />}

      {!_hide.includes('name') &&
        <ContactDetail className='invariant' title='Name' icon={<NameIcon />} content={values?.name ?? 'Add name'} onChange={onChange('name')} />}

      {!_hide.includes('email') &&
        <ContactDetail className='invariant' onChange={onChange('email')} title='Email' editableFieldName={isEditable('email')} icon={<EmailIcon />} content={values?.email ?? 'Add email'} />}

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


      <Suspense>
        {!_hide.includes('address') &&
          //@ts-ignore
          <InputText className='invariant' title='Address' prefix={<AddressIcon />} value={values?.address ?? 'Add address'} />}

        {/* {!_hide.includes('telephones') && <CrudList mystore={createstore({list[0].telephones})} icon={<PhoneIcon />} className='invariant' title='Telephones' field='telephones' />} */}
      </Suspense>
      <Suspense fallback='telephones'>

        {/* <CrudList title={'Telephones'} icon={<PhoneIcon />} store={createstore(values?.telephones ?? [''])} /> */}
      </Suspense>

      {/* @ts-ignore */}
      {!_hide.includes('website') && <InputText className='invariant' title='Website' prefix={<WebIcon />} value={values?.website ?? 'Add website'} />}

      {/*
      {!_hide.includes('relatedWith') && <CrudList list={model?.item?.draft?.relatedWith ?? []} onDelete={onDelete('relatedWith')} onChange={onChangeList('relatedWith')} readonly={!editable} icon={<RelatedwithIcon />} onAdd={onAddList('relatedWith')} onRender={(obj: any) => obj?.label ?? obj} className='invariant' title='Relation' field='relatedWith' />} */}
    </>}
  </div>;
}
export default Summary

