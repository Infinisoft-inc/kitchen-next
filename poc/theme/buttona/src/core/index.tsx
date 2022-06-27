/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocButtonA Federated Micro Component
 */
import css from '!!raw-loader!./style.css';
import { ContextProps } from '@/core/types';
import React, { ForwardedRef, forwardRef, Suspense, useEffect } from 'react';
import ReactShadowRoot from 'react-shadow-root';
import Component from '../component';
import { presets } from '../component/presets';

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
          <Component variant={variant} ref={ref} {...props}>
            {children}
          </Component>
        </main>
      </ReactShadowRoot>
    </div>
  </Suspense>
}

export default forwardRef<HTMLButtonElement, ContextProps>(ButtonA);
