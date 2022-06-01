/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Tag, Typography } from "antd";
import Drawer from "antd/lib/drawer";
import React, { Suspense, useSyncExternalStore } from "react";
import { useMicroContext } from "../context/micro";
import { AddressIcon, EmailIcon, NameIcon, WebIcon } from "./assets/svg";
import css from './index.css';

const AvatarUpload = React.lazy(() => import("./components/avatar-upload"));
// const Summary = React.lazy(() => import("./deps/summary"));
const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));

const Read = () => {
  const [visible, setVisible] = React.useState(false);

  const { store } = useMicroContext()
  const item = useSyncExternalStore(store.subscribe, store.getNormalizedState)
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot)

  const contact = item.get(state?.itemSelectedId ?? '')

  const handleClose = () => setVisible(false)

  React.useEffect(() => {
    return store.subscribe((event, state, payload) => {
      if (event.match(/(clicked)/g)) {
        console.log(`Event `, event, state, payload)
        console.log(`Normalized = `, store?.getNormalizedState?.())
        setVisible(true)
      }
    })
  }, [store])

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

  const {
    avatar = '',
    name = '',
    email = '',
    SK,
    Subcategory
  } = contact || {}

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
          <AvatarUpload src={avatar} save={() => { }} />
        </div>

        { /* @ts-ignore */}
        <InputText className='invariant' title='Name' prefix={<NameIcon />} {...configInput('name')} />
        { /* @ts-ignore */}
        <InputText className='invariant' title='Email' prefix={<EmailIcon />} {...configInput('email')} />

      </div>

      <span className={css.readCategory}>
        <Tag>
          <Typography.Title level={4} className='invariant'>
            {SK?.split('__')?.[0] ?? ''}
          </Typography.Title>
        </Tag>

        <Tag>
          <Typography.Title level={4} className='invariant'>
            {Subcategory}
          </Typography.Title>
        </Tag>
      </span>
      {/* @ts-ignore */}
      <InputText className='invariant' title='Address' prefix={<AddressIcon />} {...configInput('address')} />

      {/* @ts-ignore */}
      <InputText className='invariant' title='Website' prefix={<WebIcon />} {...configInput('website')} />

      {/* <div className={css.readContent}>
        <Suspense fallback='Summary...'>
          <Summary values={contact!} hide={['name', 'email', 'Subcategory', 'avatar']} />
        </Suspense>
      </div> */}
    </div>
  </Drawer>
  </Suspense>
}

export default Read
