/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocButtonA Federated Micro Component
 */
import React, { ForwardedRef, forwardRef, Suspense, useEffect } from 'react';
import ReactShadowRoot from 'react-shadow-root';
import Button from './component';
import { buttonaPresets } from './presets';
import { ButtonContextProps } from './types';

const ButtonA = ({ context, variant = 'filled', mode='dark', children }: ButtonContextProps, ref: ForwardedRef<unknown>) => {
  const [state, setState] = React.useState<any>();

  useEffect(() => {
    console.log(`Button A Preset = `, buttonaPresets[variant])
    const token = context?.getToken(buttonaPresets[variant])
    setState(token)
    console.log(`ButtonA Variant = ${variant} Color = `, token)
  }, [mode])


  return <Suspense>
    <div>
      <ReactShadowRoot mode='open'>
        <style>
          {state?.token && state?.value && `:host { ${state.token}: ${state.value};}`}
          {`
          .button {
            background-color: var(--md-sys-primary-color);
          }
          
          .filled {
            background-color: var(--md-sys-color-primary);
          }
          
          .outlined {
            border: 2px var(--md-sys-color-secondary) solid;
          }          
          `}
        </style>
        <main>
          <Button variant={variant}>
            {children}
            </Button>
        </main>
      </ReactShadowRoot>
    </div>
  </Suspense>
}

export default forwardRef<unknown, ButtonContextProps>(ButtonA);
