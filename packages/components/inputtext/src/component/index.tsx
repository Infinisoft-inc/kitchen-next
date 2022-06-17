/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * InputText Federated Micro Component
 */
import React from 'react';
import { CopyIcon, DeleteIcon } from './assets/svg';
import css from './index.module.css';
import { InputTextProps } from './types';

const InputText = ({
  variant = 'primary',
  multiline = false,
  copyable,
  removable,
  onRemove,
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

  return <fieldset className={css.inputtext} key={name} data-variant={variant} {...props}>
    {label && <legend>{label}</legend>}
    {before}
    {multiline && <textarea {...inputProps} placeholder={placeholder} name={name} data-variant={variant} />}

    {!multiline && <input {...inputProps} placeholder={placeholder} name={name} ref={ref} data-variant={variant} type='text' />}

    {after}
    {copyable &&
      <button data-variant={variant} onClick={() => navigator.clipboard.writeText(String(props.value))}><CopyIcon /></button>
    }
    {removable &&
      <button data-variant={variant} onClick={onRemove}><DeleteIcon /></button>
    }
  </fieldset>
}


export default React.forwardRef(InputText);
