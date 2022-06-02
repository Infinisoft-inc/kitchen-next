/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
 import React, { forwardRef, Suspense } from 'react';
import css from './index.module.css';
import { FlexLineProps } from './types';

 export const FlexLine = ({ left = '', right = '', leftProps = {}, rightProps = {} }:FlexLineProps, ref: React.LegacyRef<HTMLDivElement> | undefined) => {

   return <Suspense>
     <div className={css.root} ref={ref}>
       <div {...leftProps}>
         {left}
       </div>
       <div {...rightProps}>
         {right}
       </div>
     </div>
   </Suspense>
 }

 export default forwardRef(FlexLine);
