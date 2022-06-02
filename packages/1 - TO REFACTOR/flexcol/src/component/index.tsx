/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
import React, { forwardRef, Suspense } from 'react';
import css from './index.module.css';
import { FlexColProps } from './types';

const FlexCol = (props: any) => (<Suspense>
  <div className={css.root} {...props}>
    {props.children}
  </div>
</Suspense>)


export default forwardRef<HTMLDivElement, FlexColProps>(FlexCol);
