/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';
import { useItem } from '../store/src/useItem';
import css from './index.module.css';

export type ContentProps = {
  SK: string
};

const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));

export const Content = ({ SK }: ContentProps) => {
  const { item: contact, inputMutator } = useItem(SK)

  return <span key={SK}>
    <div className={css.headerContent}>
      <h2>Header</h2>

      <InputText className='invariant' placeholder='Name' name='name' defaultValue={contact?.name} onChange={inputMutator('name')} />
      <InputText className='invariant' placeholder='Email' name='email' defaultValue={contact?.email} onChange={inputMutator('email')} />

    </div>

    <div className={css.content}>
      <InputText />
    </div>
  </span>

}
export default Content


