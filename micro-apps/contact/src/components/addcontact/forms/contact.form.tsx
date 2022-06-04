/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Form } from 'antd';
import type { FormInstance } from 'antd/lib/form';
import React from 'react';
import { AddressIcon, EmailIcon, NameIcon, WebIcon } from '../../../assets/svg';
import AvatarUpload from "../../../components/avatar-upload";
import './overrides.css';

const InputText = React.lazy(() => import(/* webpackChunkName: 'InputText' */ 'inputtext/InputText'))

const ContactForm: React.FC<FormInstance> = (form: FormInstance) => {

  const [state, setState] = React.useState<object>();
  return <>

    {/* <Form onChangeCapture={e => {
      // @ts-ignore
      const { name, value } = e.target

      setState(prev => ({
        ...prev,
        [name]: value
      }))

    }}> */}
      <Form.Item name={'avatar'}>
        <AvatarUpload src='' save={(base64Avatar) => { form.setFieldsValue({ ...form.getFieldsValue(), avatar: base64Avatar }) }} />
      </Form.Item>

      <fieldset>
        <input type='text' onError={console.log} name='test' placeholder='Test' required onInvalid={e => console.log(` INVALID `, e)}/>
        <label htmlFor='test' >Required connard!</label>
      </fieldset>

      <fieldset>
        <InputText onError={console.log} name='name' before={<NameIcon />} placeholder='Name' required />
        {/* <label htmlFor='name' >Required connard!</label> */}
      </fieldset>

      <InputText name='address' before={<AddressIcon />} placeholder='Address' required />


      {/* <Form.Item style={{ position: 'relative' }}>
      <span className={style.prefixIcon}>
        <PhoneIcon /></span>
      <Form.Item name={['telephones']} noStyle><Select mode="tags" size='large' style={{ width: '100%' }} placeholder="Telephones" /></Form.Item>
    </Form.Item> */}

      <InputText name='email' before={<EmailIcon />} pattern='(... ... ....)' placeholder='Email' />


      <InputText name='website' before={<WebIcon />} placeholder='Website' />

      {/* <Form.Item style={{ position: 'relative' }}>
      <span className={style.prefixIcon}>
        <RelatedwithIcon />
      </span>

      <Form.Item name={['relatedWith']} noStyle>
        <Select
          // labelInValue
          notFoundContent={<>Search by keyword</>}
          filterOption={(input, opt) => { console.log(`input = `, input, `opt = `, opt); return false; }}
          mode="tags"
          size='large'
          style={{ width: '100%' }}
          onChange={console.log}
          placeholder="Related with"
        /></Form.Item>
    </Form.Item> */}


    {/* </Form> */}
  </>;
}
export default ContactForm
