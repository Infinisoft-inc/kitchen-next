/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Tag, Typography } from "antd";
import Drawer from "antd/lib/drawer";
import { InputTextProps } from "component/types";
import React, { InputHTMLAttributes, Suspense, useSyncExternalStore } from "react";
import { AddressIcon, PhoneIcon, WebIcon } from "../../assets/svg";
import { useMicroContext } from "../../context/micro";
import css from './index.css';

const AvatarUpload = React.lazy(() => import("../avatar-upload"));

const CrudList = React.lazy(() => import(/* webpackPreload: true */ '../../../../../packages/components/input/crudlist/src/component/index'))

const ContactDetails = () => {
  const [visible, setVisible] = React.useState(false);
  const { store } = useMicroContext()
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot)
  const contact = store.getNormalizedState().get(state?.itemSelectedId ?? '') || {}

  const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));

  /**
   * Effects
   */
  React.useEffect(() => {

    return store.subscribe((event, state, payload) => {
      if (event.match(/(item.clicked)/g)) {
        setVisible(true)

      }
    })
  }, [store])

  /**
   * Handlers
   */
  const handleClose = () => setVisible(false)

  const onChange = (field: keyof API.Item, newVal: any) => {
    store.mutate(_state => {
      if (contact?.[field]) {
        contact[field] = newVal
      }
      return { ..._state }
    })
  }

  const configInput = (field: keyof API.Item): InputHTMLAttributes<HTMLInputElement> & InputTextProps => {
    return {
      name: field,
      value: (contact?.[field]) as string,
      onChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => { onChange(field, e?.target.value) },
      copyable: true,
    }
  }

  const onAdd = (field: keyof API.Item) => () => {
    store.mutate(_state => {
      (contact?.[field] as Array<string>)?.push('Insert here')
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


  /**
   * Rendering
   */
  // @ts-ignore
  return <Suspense fallback='Reading...'><Drawer
    destroyOnClose
    visible={visible}
    onClose={handleClose}
    closable={false}
    bodyStyle={{ padding: 0 }}
  >
    <div className={css.read} onChangeCapture={console.log}>
      <div className={css.readHeader}>
        <div>
          <AvatarUpload src={contact?.avatar} save={() => { }} />
        </div>

        <InputText className='invariant' placeholder='Name' {...configInput('name')} />
        <InputText className='invariant' placeholder='Email' {...configInput('email')} />

      </div>

      <span className={css.readCategory}>
        <Tag>
          <Typography.Title level={4} className='invariant'>
            {contact?.SK?.split('__')?.[0] ?? ''}
          </Typography.Title>
        </Tag>

        <Tag>
          <Typography.Title level={4} className='invariant'>
            {contact?.Subcategory}
          </Typography.Title>
        </Tag>
      </span>

      <div className={css.readContent} >
        <Suspense fallback='Summary...'>
          <InputText className='invariant' placeholder='Address' before={<AddressIcon />} {...configInput('address')} />
          <InputText className='invariant' placeholder='Website' before={<WebIcon />} {...configInput('website')} />

          <span onChangeCapture={(e) => console.log(`telephone `, e)}>
            <Suspense fallback='telephones'>
              {/* @ts-ignore */}
              <CrudList title={<>Telephones</>} icon={<PhoneIcon />} name='telephones' keyPredicat={item => item.SK} itemList={contact?.telephones ?? []} onAdd={onAdd('telephones')} onChange={onChangeListItem('telephones')} onRemove={onRemove('telephones')} />
            </Suspense>
          </span>

          <Suspense fallback='relatedWith'>
            {/* @ts-ignore */}
            <CrudList data-style='input:text:root' name='relatedwith' title={<h5>Relation</h5>} icon={<PhoneIcon />} itemList={contact?.relatedWith ?? []} onAdd={onAdd('relatedWith')} onChange={onChangeListItem('relatedWith')} onRemove={onRemove('relatedWith')} />
          </Suspense>
        </Suspense>
      </div>
    </div>
  </Drawer>
  </Suspense>
}

export default ContactDetails
