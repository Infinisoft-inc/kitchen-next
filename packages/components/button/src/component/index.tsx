/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Button Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import css from './index.module.css';
import { buttonSizePresets } from './presets';
import { ButtonProps } from './types';

const Button = ({ size = 'large' }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {


  return <Suspense>
    <div className={css.root} data-style='test'>
      <button ref={ref} {...buttonSizePresets[size]} >
        Button1
      </button>
    </div>

  </Suspense>
}

export default forwardRef<HTMLButtonElement, ButtonProps>(Button);
