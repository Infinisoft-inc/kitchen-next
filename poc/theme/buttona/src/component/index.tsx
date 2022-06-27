/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocButtonA Federated Micro Component
 */
import { ContextProps } from '@/core/types';
import { ForwardedRef, forwardRef, Suspense } from 'react';

const Component = ({ variant, children, ...props }: ContextProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return <Suspense>
    <button className={variant} ref={ref} {...props}>
      {children}
    </button>
  </Suspense>
}

export default forwardRef<HTMLButtonElement, ContextProps>(Component);
