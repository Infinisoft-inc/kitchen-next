/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * MyServer Federated Micro Component
 */
import React, { Suspense, forwardRef, ForwardedRef } from 'react';
import css from './index.module.css'
import { MyServerProps } from './types';

const MyServer =  (props: MyServerProps, ref: ForwardedRef<unknown>) => {


  return <Suspense>
    <div className={css.root}>
      <button style={props} >
        Hello there
      </button>
    </div>

  </Suspense>
}

export default forwardRef<unknown, MyServerProps>(MyServer);
