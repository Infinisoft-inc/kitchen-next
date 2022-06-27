/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocButtonA Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import { ComponentProps } from './types';

const Component = ({ variant, children, ...props }: ComponentProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return <Suspense>
    <button className={variant} ref={ref} {...props}>
      {children}
    </button>
  </Suspense>
}

export default forwardRef<HTMLButtonElement, ComponentProps>(Component);
