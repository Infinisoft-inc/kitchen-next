/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocButtonA Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import ReactShadowRoot from 'react-shadow-root';
import css from './index.module.css';
import { PocButtonAProps } from './types';

const PocButtonA = (props: PocButtonAProps, ref: ForwardedRef<unknown>) => {

  return <Suspense>
    <div>
      <ReactShadowRoot mode='open'>
        <style>{props?.context?.dynamicStyle}</style>

        <main>
          <button className={css.button} >
            Button A
          </button>
        </main>
      </ReactShadowRoot>
    </div>
  </Suspense>
}

export default forwardRef<unknown, PocButtonAProps>(PocButtonA);