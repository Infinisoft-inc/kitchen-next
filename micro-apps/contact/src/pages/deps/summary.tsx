/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Tag, Typography } from 'antd';
import React from 'react';
import { useMicroContext } from '../../context/micro';
import { AddressIcon, CategoryIcon, EmailIcon, NameIcon, PhoneIcon, RelatedwithIcon, WebIcon } from '../assets/svg';
import AvatarUpload from '../components/avatar-upload';
import css from './index.css';

const ContactDetail = React.lazy(() => import('contactdetails/ContactDetails'))
const CrudList = React.lazy(() => import(/* webpackChunkName: 'CrudList' */ 'crudlist/CrudList'))

type SummaryProps = {
  values: API.Item,
  errors?: string[]
  hide?: string[]
  editable?: boolean
  variant?: 'horizontal' | 'vertical'
}

const Summary: React.FC<SummaryProps> = ({ hide = [], editable = true, errors = [], values, variant = 'vertical' }) => {
  const _hide = hide.join(' ')
  const isEditable = (fieldName: string) => editable ? fieldName : undefined
  const { model } = useMicroContext()
  const isError = errors.length > 0

  const onChange = (field: string) => (val: string) => {
    model?.item.onChange({ ...model.item.draft, [field]: val }, "summary")
    model?.item.commit.run()
  }

  const onChangeList = (_field: keyof API.Item) => (val: string, index?: number) => {
    if (model?.item?.draft?.[_field] && Array.isArray(model?.item?.draft?.[_field])) {
      model?.item.onChange({ ...model?.item?.draft, [_field]: (model?.item?.draft?.[_field] as any[]).map((item, idx) => idx === index ? val : item) }, "crudlist")
    }
  }
  const onAddList = (_field: keyof API.Item) => () => {
    model?.item.onChange({ ...model.item.draft, [_field]: ['Insert here', ...(model?.item?.draft?.[_field] as any[] || [])] }, "crudlist")
  }

  const onDelete = (_field: keyof API.Item) => (i: number) => () => {
    if (model?.item?.draft?.[_field] && Array.isArray(model?.item?.draft?.[_field])) {
      model.item?.onChange({ ...model.item.draft, [_field]: (model?.item?.draft?.[_field] as any[]).filter((_, idx) => idx !== i) }, "crudlist")
    }
  }



  return <div className={css[`summary-${variant}`] + ` invariant`}>
    {
      isError && <ol style={{ textAlign: 'left' }}>
        <Typography.Text type='danger' style={{ marginBottom: '1rem' }}>
          Please fix these errors:
        </Typography.Text>
        {errors?.map((e) => {
          return <li key={`${e}${new Date().getTime() * Math.random()}`}>
            {e}
          </li>
        })}
      </ol>
    }

    {!isError && <>

      {!_hide.includes('avatar') &&
        <AvatarUpload src={values.avatar} save={(_avatar) => {
          model?.item.onChange({ ...model.item.draft, avatar: _avatar })
          model?.operations.update.run({ ...model.item.draft })
        }} />}

      {!_hide.includes('name') &&
        <ContactDetail className='invariant' title='Name' editableFieldName={isEditable('name')} icon={<NameIcon />} content={values?.name ?? 'Add name'} onChange={onChange('name')} />}

      {!_hide.includes('Subcategory') && values?.SK && values?.Subcategory &&
        <ContactDetail className='invariant' onChange={onChange('Subcategory')} title='Category' icon={<CategoryIcon size={24} />} content={
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
        } />
      }

      {!_hide.includes('email') &&
        <ContactDetail className='invariant' onChange={onChange('email')} title='Email' editableFieldName={isEditable('email')} icon={<EmailIcon />} content={values?.email ?? 'Add email'} />}

      {!_hide.includes('address') && <ContactDetail className='invariant' onChange={onChange('address')} title='Address' editableFieldName={isEditable('address')} icon={<AddressIcon />} content={values?.address ?? 'Add address'} />}

      {!_hide.includes('telephones') && <CrudList list={model?.item?.draft?.telephones ?? []} onDelete={onDelete('telephones')} onChange={onChangeList('telephones')} onAdd={onAddList('telephones')} readonly={!editable} icon={<PhoneIcon />} className='invariant' title='Telephones' field='telephones' />}

      {!_hide.includes('website') && <ContactDetail
        className='invariant'
        icon={<WebIcon />}
        title='Website'
        editableFieldName={isEditable('website')}
        content={values?.website ?? 'Add website'}
        onChange={onChange('website')}
      />
      }


      {!_hide.includes('relatedWith') && <CrudList list={model?.item?.draft?.relatedWith ?? []} onDelete={onDelete('relatedWith')} onChange={onChangeList('relatedWith')} readonly={!editable} icon={<RelatedwithIcon />} onAdd={onAddList('relatedWith')} onRender={(obj: any) => obj?.label ?? obj} className='invariant' title='Relation' field='relatedWith' />}
    </>}
  </div>;
}
export default Summary
