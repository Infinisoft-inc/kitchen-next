/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocTheme Federated Micro Component
 */
import React, { Suspense, forwardRef, ForwardedRef } from 'react';
import css from './index.module.css';
import './index.css';
import { PocThemeProps } from './types';

const PocTheme =  (props: PocThemeProps, ref: ForwardedRef<unknown>) => {


  return <Suspense>
    <body className='darkmode'>
    <div className={css.root}>
      <button style={props}>
        Hello there
      </button>
    </div>
    </body>
  </Suspense>
}

export default forwardRef<unknown, PocThemeProps>(PocTheme);
