/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import React, { useEffect } from 'react';
import css from './index.module.css';

const Drawer = React.lazy(() => import(/* webpackChunkName: 'Drawer' */ '../Drawer'))
const Content = React.lazy(() => import(/* webpackChunkName: 'Content' */ './Content'))

export type DetailsProps = {
};

export const Details = ({ }: DetailsProps) => {
  const [visible, setVisible] = React.useState(false);
  const { store } = useMicroContext()

  useEffect(() => {
    const handleItemClick = (e: Event) => {
      setVisible(true)
    }
    window.addEventListener('item.clicked', handleItemClick)
    return () => window.removeEventListener('item.clicked', handleItemClick)

  }, [])

  useEffect(() => {
    const handleClose = (e: Event) => {
      setVisible(false)
    }
    window.addEventListener('backdrop.clicked', handleClose)
    return () => window.removeEventListener('backdrop.clicked', handleClose)

  }, [])

  return <div className={css.root}>
    <Drawer visible={visible}>
      <Content SK={store.getState()?.editItemId} onClose={() => setVisible(false)} />
    </Drawer>
  </div>
}
export default Details


