/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * ButtonB Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import ReactShadowRoot from 'react-shadow-root';
import css from './index.module.css';
import { ButtonBProps } from './types';

const ButtonB =  (props: ButtonBProps, ref: ForwardedRef<unknown>) => {


  return<Suspense>
  <div>
    <ReactShadowRoot mode='open'>
      <style>{props?.context?.dynamicStyle}</style>

      <main>
        <button className={css.button} >
          Button B
        </button>
      </main>
    </ReactShadowRoot>
  </div>
</Suspense>
}

export default forwardRef<unknown, ButtonBProps>(ButtonB);
