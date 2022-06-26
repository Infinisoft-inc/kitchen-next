/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Micro app entry point
 * Context Provider is created with localization, configuration andlogging
 */
import { Context } from '@/models';
import React, { Suspense } from 'react';
import ReactShadowRoot from 'react-shadow-root';

const MicroContextProvider = React.lazy(() => import('../context/micro'))
const App = React.lazy(() => import('./app'));

//@ts-ignore
const Contact = (props: Context) => {
  //@ts-ignore
  const { context } = props
  console.log(`PROPS = `, context?.())
  return (
    <MicroContextProvider context={props}>
      <Suspense>
        <ReactShadowRoot>
          <style>{context?.().style}</style>
          <body>
            <Suspense>
              <App />
            </Suspense>
          </body>
        </ReactShadowRoot>
      </Suspense>
    </MicroContextProvider>
  );
};

export default Contact;
