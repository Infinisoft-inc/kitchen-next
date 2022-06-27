/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocButtonA Federated Micro Component
 */
import css from '!!raw-loader!./style.css';
import React, { ForwardedRef, forwardRef, Suspense, useEffect } from 'react';
import ReactShadowRoot from 'react-shadow-root';
import Button from './component';
import { presets } from './presets';
import type { ContextProps } from './types';

const ButtonA = ({ context, variant = 'filled', mode = 'dark', children, ...props }: ContextProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const [tokens, setTokens] = React.useState('');

  useEffect(() => {
    setTokens(context?.getToken(presets[variant]) || '')
  }, [mode])

  return <Suspense>
    <div>
      <ReactShadowRoot mode='open'>
        <style>
          {`${tokens}`}
          {css}
        </style>
        <main>
          <Button variant={variant} ref={ref} {...props}>
            {children}
          </Button>
        </main>
      </ReactShadowRoot>
    </div>
  </Suspense>
}

export default forwardRef<HTMLButtonElement, ContextProps>(ButtonA);
