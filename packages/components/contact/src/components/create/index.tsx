/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import { getId } from '@/helpers';
import { useEvent } from '@/hooks/useEvent';
import React, { startTransition } from 'react';
import Content from './content';

const Dialog = React.lazy(() => import(/* webpackChunkName: 'Dialog' */ 'dialog/Dialog'))

export type DetailsProps = {
  children?: React.ReactNode
};

export const Create = ({ children }: DetailsProps) => {
  const { store } = useMicroContext()
  useEvent('create.click', () => {
    startTransition(() => {
      store.mutate((prev) => {
        const SK = `person__${getId()}`
        const newState = {
          ...prev,
          editItemId: SK,
          list: {
            [SK]: {
              SK,
              tempID: SK,
              relatedWith: [],
              telephones: []
            },
            ...prev?.list,

          }
        }

        return newState
      })
    })
  })


  return <div >
    <Dialog openEvents={['create.click']} closeEvents={['create.complete', 'backdrop.clicked']}>
      <Content SK={store?.getState()?.editItemId} />
    </Dialog>
  </div>
}
export default Create


