/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Tag, Typography } from "antd";
import Drawer from "antd/lib/drawer";
import React, { startTransition, Suspense, useState, useSyncExternalStore } from "react";
import { useMicroContext } from "../context/micro";
import css from './index.css';

const AvatarUpload = React.lazy(() => import("./components/avatar-upload"));
const Summary = React.lazy(() => import("./deps/summary"));

const Read = () => {
  const [visible, setVisible] = React.useState(false);
  const { model, store } = useMicroContext()
  const microState = useSyncExternalStore(store.subscribe, store.getSnapshot)
  // const [isPending, startTransition] = useTransition()
  const [sk, setSk] = useState(-1)
  const item = microState?.list
  // const id = store?.getNormalizedState?.()?.get?.('list')
  console.log(`id = `, microState?.itemSelectedId)


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



  const eventHandler = React.useCallback((payload: any) => {
    // model?.item.init.run(payload.detail, "init")
    // background fetch detailed data
    // model?.operations.read?.run({ SK: payload?.detail?.SK });
    setVisible(true)
    startTransition(() => {
      if (item) {
        console.log(`index = `, item?.findIndex((_item) => String(_item.SK) === String(payload?.detail?.SK)))
        setSk(item.findIndex((_item) => String(_item.SK) === String(payload?.detail?.SK)))
      }

    })
    console.log(`read() store `, store)
  }, [store, item])

  const onChange = (field: string) => ({
    onChange: (val: string) => {
      model?.item?.onChange({ ...model.item.draft, [field]: val }, "read")
    }
  })


  const {
    avatar = '',
    name = '',
    email = '',
    SK,
    Subcategory
  } = item?.[sk] || {}

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
          <AvatarUpload src={avatar} save={onChange('avatar').onChange} />
        </div>

        <Typography.Title level={3} editable={onChange('name')}>{name}</Typography.Title>

        <Typography.Title level={5} editable={onChange('email')}>{email ?? 'Email'}</Typography.Title>

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

      <div className={css.readContent}>
        <Suspense fallback='Summary...'>
          <Summary values={item?.[sk]!} hide={['name', 'email', 'Subcategory', 'avatar']} />
        </Suspense>
      </div>
    </div>
  </Drawer>
  </Suspense>
}

export default Read
