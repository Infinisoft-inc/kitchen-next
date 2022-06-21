/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Container Federated Micro Component
 */
import React, { Suspense } from 'react';
import MicroContextProvider from '../context/micro';
import { AppProps } from './types';

const Router = React.lazy(() => import(/* webpackChunkName: 'Router' */ '@/router'))

const App = (props: AppProps) => {
  return <Suspense fallback='loading'>
    <MicroContextProvider>
      <Router />
    </MicroContextProvider>
  </Suspense>
}

export default App;
