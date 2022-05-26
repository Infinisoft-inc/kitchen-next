/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
import React, { Suspense } from 'react';
import css from './index.module.css';
import { FlexLineProps } from './types';

export const FlexLine: React.FC<FlexLineProps> = ({ left = '', right = '' }) => {

  return <Suspense>
    <div className={css.root}>
      <div className={css.item}>
        {left}
      </div>
      <div className={css.item}>
        {right}
      </div>
    </div>
  </Suspense>
}

export default FlexLine;
