/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * InputText Federated Micro Component
 */
import React from 'react';
import { CopyIcon, DeleteIcon } from './assets/svg';
import './index.module.css';
import { InputTextProps } from './types';

const InputText = ({
  variant = 'primary',
  copyable,
  ghost = true,
  removable,
  onRemove,
  prefix,
  suffix,
  ...props }: InputTextProps,
  ref: React.ForwardedRef<HTMLInputElement>) => {
  const [focus, setFocus] = React.useState(false);
  const styleOptions = () => {
    let styles = ''

    styles = focus ? ':focus' : '';
    styles = `${styles}${ghost ? ':ghost' : ''}`
    return styles
  }

  return <span data-style='input:text:root'>
    {prefix}

    <input {...props} ref={ref} name={`input:text${styleOptions()}`} type='text' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />

    {suffix}

    {copyable &&
      <button name={`button:${variant}`} onClick={() => navigator.clipboard.writeText(String(props.value))}><CopyIcon /></button>
    }

    {removable &&
      <button name={`button:${variant}`} onClick={onRemove}><DeleteIcon /></button>
    }
  </span>
}


export default React.forwardRef(InputText);
