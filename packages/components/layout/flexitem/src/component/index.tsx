/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * FlexItem Federated Micro Component
 */
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import css from './index.module.css';
import { FlexItemProps } from './types';

const FlexItem = ({ children }: FlexItemProps, ref: ForwardedRef<HTMLDivElement>) => {


  return <Suspense>
    <div className={css.root} ref={ref}>
      {children}
    </div>
  </Suspense>
}

export default forwardRef<HTMLDivElement, FlexItemProps>(FlexItem);
