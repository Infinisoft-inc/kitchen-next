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
  inputProps,
  ...props
}: InputTextProps,
  ref: React.ForwardedRef<HTMLInputElement>) => {

  return <fieldset className={css.inputtext} key={name} {...props}>
    {label && <legend className={css.inputtextLegend}>{label}</legend>}
    {before}
    {multiline && <textarea  className={css.inputtextArea} {...inputProps} placeholder={placeholder} name={name} />}

    {!multiline && <input {...inputProps} placeholder={placeholder} name={name} ref={ref} type='text' />}

    {after}
  </fieldset>
}


export default React.forwardRef(InputText);
