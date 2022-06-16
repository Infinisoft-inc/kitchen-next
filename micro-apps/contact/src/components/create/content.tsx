/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';
import css from './index.module.css';
import { Category } from './steps/category';

const Step1 = React.lazy(() => import(/*webpackPreload: true*//* webpackChunkName: 'Step1' */ './steps/step1'))
const Step2 = React.lazy(() => import(/*webpackPreload: true*//* webpackChunkName: 'Step2' */ './steps/step2'))
export type ContentProps = {
  SK: string
};

export const Content = ({ SK }: ContentProps) => {
  const [step, setStep] = React.useState(1);

  return <span key={SK}>
    <div className={css.content}>
      <Category hidden={step !== 1} SK={SK} />
      <Step1 hidden={step !== 2} SK={SK} />
      <Step2 hidden={step !== 3} SK={SK} />
    </div>

    <div className={css.footer}>
      <button hidden={step <= 1} className={css.next} onClick={() => setStep(prev => prev - 1)}>Back</button>
      <button hidden={step === 3} className={css.next} onClick={() => setStep(prev => prev + 1)}>Next</button>
      <button hidden={!(step === 3)} className={css.next} onClick={() => window.dispatchEvent(new CustomEvent('create.complete'))}>Complete</button>
    </div>
  </span>

}
export default Content


