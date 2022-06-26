/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * StyleIsolation Federated Micro Component
 */
import React, { ForwardedRef, forwardRef, HTMLAttributes, Suspense } from 'react';
import ReactShadowRoot from 'react-shadow-root';
import css from './index.module.css';
import { StyleIsolationProps } from './types';

type EncapsulatedComponentProps = {
  children: React.ReactNode
  cssInjection: string
} & HTMLAttributes<HTMLDivElement>

/**
 * Simulating Federated Component
 */
const EncapsulatedComponent = ({ children, cssInjection, ...props }: EncapsulatedComponentProps, ref: ForwardedRef<HTMLDivElement>) => {
  const [color, setColor] = React.useState(false);

  return <div {...props} key={cssInjection} id="host" onClickCapture={() => { setColor(prev => !prev); console.log(`Inside Shadow Dom`) }}>
    <ReactShadowRoot>
      <style>{cssInjection}</style>
      <body>
        {children}
      </body>
    </ReactShadowRoot>
  </div>
}


/**
 * Simulating Federated Container
 */
const StyleIsolation = (props: StyleIsolationProps, ref: ForwardedRef<unknown>) => {
  const [active, setActive] = React.useState(false);
  const dynamicStyleInjection = (color: string) => `:host { --primary: ${color}; } body { background-color: white;}  button { background-color: var(--primary); }`

  return <Suspense>
    <div className={css.root} key={String(active)}>

      <h1>Outside Shadow Dom</h1>

      <button style={props} onClick={() => { setActive(prev => !prev); console.log(`clicked`) }} >
        Outside Shadow Dom
      </button>


      <EncapsulatedComponent className={css.shadowRoot} cssInjection={dynamicStyleInjection(active ? 'red' : 'green')}>
        <h1>Inside Shadow Dom</h1>

        <button>Click Me</button>
      </EncapsulatedComponent>
    </div>
  </Suspense>
}

export default forwardRef<unknown, StyleIsolationProps>(StyleIsolation);
