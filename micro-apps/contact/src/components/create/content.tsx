/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';
import { useItem } from '../store/src/useItem';
import css from './index.module.css';
import Step1 from './steps/step1';
import Step2 from './steps/step2';

const InputText = React.lazy(() => import(/* webpackPreload: true */ 'inputtext/InputText'));
const CrudList = React.lazy(() => import(/* webpackPreload: true */ 'crudlist/CrudList'))
const AvatarUpload = React.lazy(() => import(/* webpackChunkName: 'AvatarUpload' */ '../avatar-upload'))

export type ContentProps = {
  SK: string
};


export const Content = ({ SK }: ContentProps) => {
  const { item: contact, inputMutator, listMutator, useMutator } = useItem(SK)

  console.log(`Create Content SK = `, SK)
  console.log(`Create Content contact = `, contact)

  const props = (field: keyof API.Item) => ({
    // className: 'invariant',
    placeholder: field,
    name: field,
    value: contact?.[field] ? String(contact?.[field]) : '',
    onChange: inputMutator(field)
  })
  const [step, setStep] = React.useState(1);

  return <span key={SK}>
    <div className={css.content}>
      <Step1 hidden={step !== 1} SK={SK} />
      <Step2 hidden={step !== 2} SK={SK} />
    </div>

    <div className={css.footer}>
      <button hidden={step <= 1} className={css.next} onClick={() => setStep(prev => prev - 1)}>Back</button>
      <button hidden={step === 2} className={css.next} onClick={() => setStep(prev => prev + 1)}>Next</button>
      <button hidden={!(step === 2)} className={css.next} onClick={() => window.dispatchEvent(new CustomEvent('create.complete'))}>Complete</button>
    </div>
  </span>

}
export default Content


