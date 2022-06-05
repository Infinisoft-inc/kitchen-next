/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { PhoneIcon } from "@/assets/svg";
import Drawer from "antd/lib/drawer";
import { InputTextProps } from "component/types";
import React, { InputHTMLAttributes, Suspense, useDeferredValue, useSyncExternalStore } from "react";
import { useMicroContext } from "../../context/micro";
import css from './index.css';

const AvatarUpload = React.lazy(() => import("../avatar-upload"));

const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))

const ContactDetails = () => {
  const [visible, setVisible] = React.useState(false);
  const { store } = useMicroContext()
  const contactList = useSyncExternalStore(store.subscribe, () => store.getNormalizedState())
  const contact = useDeferredValue(contactList?.get?.(store.getSnapshot()?.itemSelectedId ?? '') || {})

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
  }, [])

  /**
   * Handlers
   */
  const handleClose = () => setVisible(false)

  const onChange = (field: keyof API.Item, newVal: any) => {
    // contact[field] = newVal
    // store.mutate(_state => {
    //   return { ..._state }
    // })
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

    // store.mutate(_state => ({ ..._state }))
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
        {/* <div>
          <AvatarUpload src={contact?.avatar} save={() => { }} />
        </div> */}

        <InputText key={111111} className='invariant' placeholder='Name' name='name' defaultValue={contact?.name} />
        <InputText className='invariant' placeholder='Email' name='email' defaultValue={contact?.email} />

      </div>

      {/* <span className={css.readCategory}>
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
      </span> */}

      <div className={css.readContent} >
        {/* <Suspense fallback='Summary...'> */}
        {/* <InputText className='invariant' placeholder='Address' before={<AddressIcon />} {...configInput('address')} />
          <InputText className='invariant' placeholder='Website' before={<WebIcon />} {...configInput('website')} /> */}


        <span key={contact.telephones?.length} onChangeCapture={e => {
          const target = e.target as HTMLInputElement
          // store.mutateNormalized((_state) => {
          //   _state.set(contact?.SK!, {
          //     ...contact,

          //   })
          //   return _state
          // })
          console.log({
            index: target.dataset.index,
            value: target.value
          })
        }}>
          <Suspense fallback='telephones' >
            {/* @ts-ignore */}
            <CrudList key={contact?.telephones?.length}  title={<>Telephones</>} icon={<PhoneIcon />} name='telephones' itemList={[...(contact?.telephones || [''])]} onAdd={() => {




              // store.mutateNormalized(_state => {
              //@ts-ignore
              // contact.telephones = ['new', ...contact.telephones!]
              contact.telephones?.push('NEW DE MARDE')
              // _state.set(contact?.SK!, {
              //   ...contact,
              // })

              //   return _state;
              // })


            }} onRemove={onRemove('telephones')} />
          </Suspense>
        </span>



        {/* </Suspense> */}
      </div>
    </div>
  </Drawer>
  </Suspense>
}

export default ContactDetails
