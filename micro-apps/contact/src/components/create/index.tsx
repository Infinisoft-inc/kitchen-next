/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import React, { startTransition, useEffect } from 'react';
import Content from './content';

const Dialog = React.lazy(() => import(/* webpackChunkName: 'Dialog' */ '../dialog'))

export type DetailsProps = {
  children?: React.ReactNode
};

export const Create = ({ children }: DetailsProps) => {

  const { store } = useMicroContext()

  const handleAdd = () => {
    const SK = `person__${new Date().getTime().toFixed(0)}`

    startTransition(() => {
      store.mutate((state) => {
        const newState = {
          ...state,
          editItemId: SK
        }

        console.log(`handleAdd SK = `, newState.editItemId)
        console.log(`handleAdd state before set = `, state)
        console.log(`handleAdd newState before set = `, newState)

        newState?.list?.set(newState.editItemId, { SK: newState.editItemId, relatedWith: [], telephones: [] })

        console.log(`handleAdd state after set = `, state)
        console.log(`handleAdd newState after set = `, newState)
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


