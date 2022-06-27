/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocButtonA Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import { ContextProps } from './types';

const ButtonA = ({ variant, children, ...props }: ContextProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return <Suspense>
    <button className={variant} ref={ref} {...props}>
      {children}
    </button>
  </Suspense>
}

export default forwardRef<HTMLButtonElement, ContextProps>(ButtonA);
