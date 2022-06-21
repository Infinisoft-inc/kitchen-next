/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Micro app entry point
 * Context Provider is created with localization, configuration andlogging
 */
import React from 'react';
// import { SecurityContext } from '../../../../common/src';

const MicroContextProvider = React.lazy(() => import('../context/micro'))
const App = React.lazy(() => import('./app'));

// const Contact = (context: SecurityContext) => {
const Contact = () => {

  // console.log(`Context = `, context)

  return (
    <MicroContextProvider>
      <App />
    </MicroContextProvider>
  );
};

export default Contact;
