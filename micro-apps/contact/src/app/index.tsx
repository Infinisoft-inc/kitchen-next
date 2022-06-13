/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Micro app entry point
 * Context Provider is created with localization, configuration andlogging
 */
import React from 'react';

const MicroContextProvider = React.lazy(() => import('../context/micro'))
const App = React.lazy(() => import('./app'));

const Index = () => {
  return (
      <MicroContextProvider>
        <App />
      </MicroContextProvider>
  );
};

export default Index;
