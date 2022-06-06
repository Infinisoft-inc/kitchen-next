/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/micro';
import React from 'react';
import { useStore } from '../store';
import css from './index.module.css';

export type ContentProps = {
  SK: string
};

const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));

export const Content = ({ SK }: ContentProps) => {
  const { store } = useMicroContext()
  const contact = useStore(store, state => state?.list?.get?.(SK)) as API.Item

  const setContact = (field: keyof API.Item, newValue: typeof contact[typeof field]) => store.mutate(prev => ({ ...prev, list: { ...prev.list, [SK]: { ...contact, [field]: newValue } } }))

  console.log(`contact = `, contact)
  return <>
    <div className={css.headerContent}>
      <h2>Header</h2>

      <InputText className='invariant' placeholder='Name' name='name' defaultValue={contact?.name} onChange={e => setContact('name', e.target.value)} />

    </div>

    <div className={css.content}>
      <InputText />
    </div>
  </>

}
export default Content


