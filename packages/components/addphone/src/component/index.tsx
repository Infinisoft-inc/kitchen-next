/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * AddPhone Federated Micro Component
 */
import React, { Suspense, forwardRef, ForwardedRef } from 'react';
import css from './index.module.css'
import { AddPhoneProps } from './types';

const AddPhone =  (props: AddPhoneProps, ref: ForwardedRef<unknown>) => {


  return <Suspense>
    <div className={css.root}>
      <button style={props} >
        Hello there
      </button>
    </div>

  </Suspense>
}

export default forwardRef<unknown, AddPhoneProps>(AddPhone);
