/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Micro app entry point
 * Context Provider is created with localization, configuration andlogging
 */

import React, { Suspense } from 'react';

const Index = React.lazy(() => import('contact/Index'));
const Button = React.lazy(() => import('button/Button'));
const Pulse = React.lazy(() => import('pulse/Pulse'));

const App = () => {
  return (<Suspense fallback="container">
    <h1>Container</h1>
    <Index />
    <Button message='KOUUUUUUUUUUUUUUUUAAAAAAAAA??' />
    <Button message='Bobeytyte??' />
    <Pulse direction='vertical'><div style={{ width: '200px', height: '200px', backgroundColor: 'blue' }}>TEST</div></Pulse>
  </Suspense>
  );
};

export default App;
