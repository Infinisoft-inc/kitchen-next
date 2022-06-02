/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * ButtonA Federated Micro Component
 */
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import css from './index.module.css';
import { ButtonAProps } from './types';

const ButtonA =  (props: ButtonAProps, ref: ForwardedRef<unknown>) => {


  return <Suspense>
    <div className={css.root}>
      <button style={props} >
        Hello
      </button>
    </div>

  </Suspense>
}

export default forwardRef<unknown, ButtonAProps>(ButtonA);
