/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * InputText Federated Micro Component
 */
import React from 'react';
import css from './index.module.css';
import { InputTextProps } from './types';

const InputText = ({
  multiline = false,
  before,
  after,
  name,
  label = '',
  invalidMessage = 'Invalid!',
  placeholder,
  inverse = false,
  containerProps,
  containerClass = '',
  inputClass = '',
  ...props
}: InputTextProps,
  ref: React.ForwardedRef<HTMLInputElement>) => {

  return <fieldset className={`${css.inputtext} ${inverse ? css.inverse : ''} ${containerClass}`} key={name} {...containerProps}>
    {label && <legend className={css.inputtextLegend}>{label}</legend>}
    {before}
    {multiline && <textarea className={`${css.inputtextArea} ${inputClass}`} {...props} placeholder={placeholder} name={name} />}

    {!multiline && <input {...props} className={inputClass} placeholder={placeholder} name={name} ref={ref} type='text' />}

    {after}
  </fieldset>
}


export default React.forwardRef(InputText);
