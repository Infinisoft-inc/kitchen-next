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
  before,
  after,
  invalidMessage = 'Invalid!',
  ...props }: InputTextProps,
  ref: React.ForwardedRef<HTMLInputElement>) => {
  const styleOptions = () => {
    let styles = ''

    styles = `${styles}${ghost ? ':ghost' : ''}`
    return styles
  }

  return <fieldset key={new Date().getTime()} data-style='input:text:container' data-variant={variant}>
    <div>
      {before}
    </div>

    <div>
      <input {...props} ref={ref} data-style={`input:text:control`} data-options={styleOptions()} data-variant={variant} type='text'/>

      <label data-style='input:text:label'>{invalidMessage}</label>
    </div>

    <div>
      {after}
      {copyable &&
        <button data-style={`input:text:button:copy`} data-options={styleOptions()} data-variant={variant} onClick={() => navigator.clipboard.writeText(String(props.value))}><CopyIcon /></button>
      }
      {removable &&
        <button data-style={`input:text:button:removable`} data-options={styleOptions()} data-variant={variant} onClick={onRemove}><DeleteIcon /></button>
      }
    </div>


  </fieldset>
}


export default React.forwardRef(InputText);
