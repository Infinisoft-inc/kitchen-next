/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Tag, Typography } from "antd";
import Drawer from "antd/lib/drawer";
import { InputTextProps } from "component/types";
import React, { InputHTMLAttributes, Suspense, useSyncExternalStore } from "react";
import { useMicroContext } from "../context/micro";
import { AddressIcon, PhoneIcon, WebIcon } from "./assets/svg";
import css from './index.css';

const AvatarUpload = React.lazy(() => import("./components/avatar-upload"));
const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))

const Read = () => {
  const [visible, setVisible] = React.useState(false);
  const { store } = useMicroContext()
  const contact = useSyncExternalStore(store.subscribe, ()=>store.getNormalizedState().get(store.getSnapshot()?.itemSelectedId ?? ''))

  /**
   * Effects
   */
  React.useEffect(() => {
    return store.subscribe((event, state, payload) => {
      if (event.match(/(clicked)/g)) {
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
      key: field,
      value: (contact?.[field] ?? 'Insert here') as string,
      onChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => { onChange(field, e?.target.value) },
      copyable: false,
    }
  }

  const onAdd = (field: keyof API.Item) => () => {
    store.mutate(_state => {
      (contact?.[field] as Array<string>)?.push('Insert here')
      return { ..._state }
    })
  }

  const onRemove = (field: keyof API.Item) =>  (i: number, item: API.Item) => {
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
    <div className={css.read}>
      <div className={css.readHeader}>
        <div>
          <AvatarUpload src={contact?.avatar} save={() => { }} />
        </div>

        <InputText className='invariant' title='Name' {...configInput('name')} />
        <InputText className='invariant' title='Email' {...configInput('email')} />

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

      <div className={css.readContent}>
        <Suspense fallback='Summary...'>
          <InputText className='invariant' title='Address' before={<AddressIcon />} {...configInput('address')} />
          <InputText className='invariant' title='Website' before={<WebIcon />} {...configInput('website')} />

          <Suspense fallback='telephones'>
            {/* @ts-ignore */}
            <CrudList title={<h5>Telephones</h5>} icon={<PhoneIcon />} list={contact?.telephones} onAdd={onAdd('telephones')} onChange={onChangeListItem('telephones')} onRemove={onRemove('telephones')} />
          </Suspense>

          <Suspense fallback='relatedWith'>
            {/* @ts-ignore */}
            <CrudList title={<h5>Relation</h5>} icon={<PhoneIcon />} list={contact?.relatedWith} onAdd={onAdd('relatedWith')} onChange={onChangeListItem('relatedWith')} onRemove={onRemove('relatedWith')} />
          </Suspense>
        </Suspense>
      </div>
    </div>
  </Drawer>
  </Suspense>
}

export default Read
