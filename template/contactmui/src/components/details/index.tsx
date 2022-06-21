/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import React, { startTransition, Suspense } from 'react';
import { useEvent } from '../../hooks/useEvent';
import css from './index.module.css';

const Drawer = React.lazy(() => import(/*    */ /* webpackChunkName: 'Drawer' */ '@mui/material/Drawer/Drawer'))
const Content = React.lazy(() => import(/*    */ /* webpackChunkName: 'Content' */ './Content'))

export type DetailsProps = {};

const Details = ({ }: DetailsProps) => {
  const [visible, setVisible] = React.useState(false);
  const { store } = useMicroContext()
  const hide = () => { startTransition(() => setVisible(false)) }
  const show = () => { startTransition(() => setVisible(true)) }

  useEvent('item.clicked', show)
  useEvent('backdrop.clicked', hide)

  return <div className={css.root}>
    <Suspense fallback='loading'>
      <Drawer
        PaperProps={{
          className: css.drawer
        }}
        anchor={'right'}
        open={visible}
        onClose={hide}
      >
        <Content id={store.getState()?.editItemId} onClose={hide} />
      </Drawer>
    </Suspense>
  </div>
}
export default Details


