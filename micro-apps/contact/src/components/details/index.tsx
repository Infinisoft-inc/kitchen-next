/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import React, { startTransition } from 'react';
import { Modal } from '../modal';
import Content from './content';

export type DetailsProps = {
  children: React.ReactNode
};

export const Details = ({ children }: DetailsProps) => {
  const [visible, setVisible] = React.useState(false);
  const { store } = useMicroContext()

  const onClickCapture: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    startTransition(() => {
      store.mutate(prev => ({ ...prev, editItemId: (e.target as HTMLElement).id }))
      setVisible(!Boolean((e.target as HTMLElement).dataset.component?.includes('backdrop')))
    })
  }

  return <div onClickCapture={onClickCapture} >
    <Modal visible={visible}>
      <Content SK={store.getState()?.editItemId} />
    </Modal>
    {children}
  </div>
}
export default Details


