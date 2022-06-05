/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * MyServer Federated Micro Component
 */
import React, { Suspense } from 'react';

const Button =  () => {
  const [state, setState] = React.useState(false);

  React.useEffect(()=>{setTimeout(()=>{setState(true)},5000)},[])
  if (!state) return null

  return (<Suspense fallback='DOOOOOOOOOOOOOOOOOOOOOOG'>{state && <div><button>My button</button></div>}</Suspense>)
}
export default Button
