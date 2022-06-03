/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * FlexContainer Federated Micro Component
 */
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import { FlexContainerProps } from './types';

const FlexContainer = ({ children, ...props }: FlexContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <Suspense>
    <div {...props} ref={ref} data-style='container:root'>
      {children}
    </div>
  </Suspense>
}

export default forwardRef<HTMLDivElement, FlexContainerProps>(FlexContainer);
