/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocContainer Federated Micro Component
 */
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import css from './index.module.css';
import { context, PocContainerProps } from './types';

const ButtonA = React.lazy(() => import(/* webpackChunkName: 'ButtonA' */ 'pocbuttona/PocButtonA'))
const ButtonB = React.lazy(() => import(/* webpackChunkName: 'ButtonA' */ 'pocbuttonb/ButtonB'))

const PocContainer = (props: PocContainerProps, ref: ForwardedRef<unknown>) => {

  return <Suspense>
    <header className={css.root}>
      <h1>POC Container</h1>

      <button>Container button</button>


    </header>
    <main>
      <ButtonA context={context} />
      <ButtonB context={context} />
    </main>
  </Suspense>
}

export default forwardRef<unknown, PocContainerProps>(PocContainer);
