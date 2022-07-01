/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Micro app entry point
 * Context Provider is created with localization, configuration andlogging
 */
import { Context } from '@/core/types';
import React, { startTransition, Suspense, useEffect } from 'react';
import ReactShadowRoot from 'react-shadow-root';

const MicroContextProvider = React.lazy(() => import('../context/micro'))
const App = React.lazy(() => import('./app'));

const Contact = (props: {context: Context}) => {
  const [tokens, setTokens] = React.useState('');

  useEffect(() => {
    startTransition(() => {
      console.log(`props = `, props)
      const result = props?.context?.getToken?.(['md_sys_color_primary', 'md_sys_color_on-primary', 'md_sys_color_shadow', 'md_sys_color_inverse-on-surface', 'md_sys_typescale_label-large'])
      console.log(result)
      setTokens(result)
    })
  }, [props?.context?.mode])

  return (
    <MicroContextProvider context={props.context}>
      <Suspense>
        <ReactShadowRoot>
          <style>
            {`${tokens}`}
          </style>
          <Suspense>
            <App />
          </Suspense>
        </ReactShadowRoot>
      </Suspense>
    </MicroContextProvider>
  );
};

export default Contact;
