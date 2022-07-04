/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/index';
import { useMicroState } from '@/hooks/useMicroState';
import { ForwardedRef, forwardRef, Suspense } from 'react';
import { buttonSizePresets } from './presets';
import css from './style/index.module.css';
import type { ExtendComponentProps } from './types';

  const  Component = ({ size = 'large', children='Button' }:  ExtendComponentProps,  ref: ForwardedRef<HTMLButtonElement>) => {
  const { store } = useMicroContext()
  const state = useMicroState()

return <Suspense>
    <div className={css.root}>
      <button ref={ref} {...buttonSizePresets[size]} >
        {children}
      </button>
    </div>

  </Suspense>;
}

export default forwardRef<HTMLButtonElement, ExtendComponentProps>(Component);