/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocButtonA Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import { ContextProps } from './types';

const ButtonA = ({ variant, children }: ContextProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return <Suspense>
    <button className={variant} ref={ref}>
      {children}
    </button>
  </Suspense>
}

export default forwardRef<HTMLButtonElement, ContextProps>(ButtonA);
