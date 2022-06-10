/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import React, { startTransition } from 'react';
import css from './index.module.css';

const Drawer = React.lazy(() => import(/* webpackChunkName: 'Drawer' */ '../Drawer'))
const Content = React.lazy(() => import(/* webpackChunkName: 'Content' */ './Content'))

export type DetailsProps = {
  children: React.ReactNode
};

export const Details = ({ children }: DetailsProps) => {
  const [visible, setVisible] = React.useState(false);
  const { store } = useMicroContext()

  /**
   * Captures bubbled click event, set record id on store
   * @param e Event
   */
  const onClickCapture: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    startTransition(() => {
      /**
       * REFACTOR
       * SEPARATE CONCERNS
       * id mutation has nothing related to modal state
       */
      if (!visible) {
        store.mutate(prev => ({ ...prev, editItemId: (e.target as HTMLElement).id }))
      }

      setVisible(!Boolean((e.target as HTMLElement).dataset.component?.includes('backdrop:drawer')))
    })
  }

  return <div onClickCapture={onClickCapture} className={css.root}>
    <Drawer visible={visible}>
      <Content SK={store.getState()?.editItemId} onClose={() => setVisible(false)} />
    </Drawer>
    {children}
  </div>
}
export default Details


