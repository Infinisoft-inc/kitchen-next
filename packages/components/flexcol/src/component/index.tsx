/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
 import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import css from './index.module.css';
import { FlexColProps } from './types';

 export const FlexCol = (props: FlexColProps, ref: ForwardedRef<HTMLDivElement>) => (<Suspense>
   <div className={css.root} {...props} ref={ref}>
     {props.children}
   </div>
 </Suspense>)


 export default forwardRef<HTMLDivElement, FlexColProps>(FlexCol);
