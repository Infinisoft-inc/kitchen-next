/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useEvent } from '@/hooks/useEvent';
import React from 'react';
import css from './index.module.css';

const Category = React.lazy(() => import(/*   */ /* webpackChunkName: 'Category' */ './steps/category'))
const Subcategory = React.lazy(() => import(/*   */ /* webpackChunkName: 'SubCategory' */ './steps/subcategory'))
const ContactInformation = React.lazy(() => import(/*   */ /* webpackChunkName: 'ContactInformation' */ './steps/contactinformation'))
const Relations = React.lazy(() => import(/*   *//* webpackChunkName: 'Relations' */ './steps/relations'))

export type ContentProps = {
  SK: string
};

/**
 * CONFIG SECTION STANDARDIZE FOR TEMPLATE
 */
const _steps = [
  { Component: Category },
  { Component: Subcategory },
  { Component: ContactInformation },
  { Component: Relations }
]

/**
 * Convert to a MF
 */
type NavButtonsProps = {
  step: number,
  setStep: React.Dispatch<React.SetStateAction<number>>,
  count: number
  onCompleteEvent?: Event
}

const NavButtons = ({ setStep, step, count, onCompleteEvent = new CustomEvent('complete') }: NavButtonsProps) => (<> <button hidden={step <= 1} className={css.next} onClick={() => setStep(prev => prev - 1)}>Back</button>
  <button hidden={step === count} className={css.next} onClick={() => setStep(prev => prev + 1)}>Next</button>
  <button hidden={!(step === count)} className={css.next} onClick={() => { window.dispatchEvent(onCompleteEvent); setStep(1) }}>Complete</button>
</>
)

export type StepsActions = {
  step: number
  SK: string
  next: Function
  back: Function
}

const Steps = ({ step, ...props }: StepsActions) => (<>{_steps.map(({ Component }, i) => <Component {...props} key={`step${i}`} step={step} hidden={step !== (i + 1)} />)}</>)

export const Content = ({ SK }: ContentProps) => {
  const [step, setStep] = React.useState(1);
  useEvent('backdrop.clicked', () => {setStep(1)})

  const next = () => setStep(prev => prev + 1)
  const back = () => setStep(prev => prev - 1)
  const props = { next, back, step, SK }

  return <span key={SK}>
    <div className={css.content}>
      <Steps {...props} />
    </div>

    <div className={css.footer}>
      <NavButtons step={step} setStep={setStep} count={_steps.length} onCompleteEvent={new CustomEvent('create.complete')} />
    </div>
  </span>

}
export default Content


