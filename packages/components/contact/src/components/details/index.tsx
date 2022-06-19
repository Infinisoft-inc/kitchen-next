/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import React from 'react';
import { useEvent } from '../../hooks/useEvent';
import css from './index.module.css';

const Drawer = React.lazy(() => import(/*    */ /* webpackChunkName: 'Drawer' */ 'drawer/Drawer'))
const Content = React.lazy(() => import(/*    */ /* webpackChunkName: 'Content' */ './Content'))

export type DetailsProps = {};

const Details = ({ }: DetailsProps) => {
  const [visible, setVisible] = React.useState(false);
  const { store } = useMicroContext()
  const hide = () => {setVisible(false)}
  const show = () => {setVisible(true)}

  useEvent('item.clicked', show)
  useEvent('backdrop.clicked', hide)

  return <div className={css.root}>
    <Drawer visible={visible}>
      <Content SK={store.getState()?.editItemId} onClose={hide} />
    </Drawer>
  </div>
}
export default Details


