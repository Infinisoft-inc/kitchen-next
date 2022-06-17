/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import React, { startTransition, useEffect } from 'react';
import Content from './content';

const Dialog = React.lazy(() => import(/* webpackChunkName: 'Dialog' */ 'dialog/Dialog'))

export type DetailsProps = {
  children?: React.ReactNode
};

export const Create = ({ children }: DetailsProps) => {
  const { store } = useMicroContext()

  const handleAdd = () => {
    const SK = `person`

    startTransition(() => {
      store.mutate((prev) => {
        const newState = {
          ...prev,
          editItemId: SK,
          list: {
            ...prev?.list,
            [SK]: {
              SK,
              tempID: new Date().getTime().toFixed(0),
              relatedWith: [],
              telephones: []
            }
          }
        }

        return newState
      })
    })

    return SK
  }

  const [state, setState] = React.useState('');
  useEffect(() => {
    window.addEventListener('create.click', () => {
      setState(handleAdd())
    })

    return () => window.removeEventListener('create.click', () => { })
  }, [handleAdd])


  return <div >
    <Dialog openEvents={['create.click']} closeEvents={['create.complete']}>
      <Content SK={state} />
    </Dialog>
  </div>
}
export default Create


