/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context';
import { createItem } from '@/hooks';
import { useEvent } from '@/hooks/useEvent';
import React from 'react';
import Content from './content';

const Dialog = React.lazy(() => import(/* webpackChunkName: 'Dialog' */ 'dialog/Dialog'))

export type DetailsProps = {
  children?: React.ReactNode
};

export const Create = ({ children }: DetailsProps) => {
  const { store } = useMicroContext()
  const [state, setState] = React.useState<string>();

  useEvent('create.click', (e) => {
    console.log(`craeate.click time: ${new Date().getTime().toLocaleString()} event = `, e)
    createItem(store)
      .then(setState)
  })


  return <div >
      <Dialog openEvents={['create.click']} closeEvents={['create.complete', 'backdrop.clicked']}>
        {state && <Content id={state} />}
      </Dialog>
  </div>
}
export default Create


