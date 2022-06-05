/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React, { useSyncExternalStore } from 'react';
import { AddressIcon, EmailIcon, NameIcon, PhoneIcon, RelatedwithIcon, WebIcon } from '../../../assets/svg';
import AvatarUpload from "../../../components/avatar-upload";
import { useMicroContext } from '../../../context/micro';
import './overrides.css';


const InputText = React.lazy(() => import(/* webpackChunkName: 'InputText' */ 'inputtext/InputText'))
const CrudList = React.lazy(() => import(/* webpackChunkName: 'CrudList' */ 'crudlist/CrudList'))


const ContactForm = () => {

  const { store } = useMicroContext()
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot)
  const contact = store.getNormalizedState().get(state?.itemSelectedId ?? '') || {}
  let telephones = store.getNormalizedState().get(state?.itemSelectedId ?? '')?.telephones || []



  const myadd = () => {
    store.mutate(_state => {
      telephones = ['', ...telephones]
      return { ..._state }
    })
  }

  const onAdd = (field: keyof API.Item) => () => {
    alert(`onAdd`)
    myadd()
    store.mutate(_state => {
      (contact?.[field] as Array<string>)?.push('Insert here')
      //@ts-ignore
      contact[field] = [''].concat(contact[field])
      return { ..._state }
    })
  }

  const onRemove = (field: keyof API.Item) => (i: number, item: API.Item) => {
    delete (contact?.[field] as Array<string>)?.[i]
    store.mutate(_state => ({ ..._state }))
  }

  const onChangeListItem = (field: keyof API.Item) => (i: number, item: API.Item, newValue: string) => {
    if ((contact?.[field] as Array<string>)?.[i]) {
      (contact![field] as Array<string>)[i] = newValue
    }

    store.mutate(_state => ({ ..._state }))
  }



  return <>

    {/* <Form.Item name={'avatar'}> */}
    <AvatarUpload src='' save={(base64Avatar) => { }} />
    {/* </Form.Item> */}

    <InputText name='name' before={<NameIcon />} placeholder='Name' required />
    <InputText name='address' before={<AddressIcon />} placeholder='Address' required />
    <InputText name='email' before={<EmailIcon />} placeholder='Email' />
    <CrudList title={'Telephones'} k={'SK'} keyPredicat={item => item.SK} icon={<PhoneIcon />} onAdd={onAdd('telephones')} onChange={onChangeListItem('telephones')} onRemove={onRemove('telephones')} itemList={contact?.telephones ?? []} />
    <CrudList title={'Relation'} k={'SK'} icon={<RelatedwithIcon />} onAdd={() => { }} onChange={(id, e, he) => { }} onRemove={() => { }} itemList={[]} />
    <InputText name='website' before={<WebIcon />} placeholder='Website' />

  </>;
}
export default ContactForm
