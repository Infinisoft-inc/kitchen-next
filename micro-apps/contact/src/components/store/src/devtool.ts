/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Store } from "../types";

export const devtool = <S, P>(store: Store<S, P>) => {

if (typeof window === 'object' && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined') {
  //@ts-ignore
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect();

  devTools.subscribe((message: any) => {
    if (message.type === 'DISPATCH' && message.state) {
      console.log('DevTools requested to change the state to', message.state);
    }
  });

  devTools.init(store.getState());

  store.subscribe(devTools.send)
} else {
  console.error(`
*******************************************************************
                      DEVMODE ENABLED
              Redux devtool extension not found!

              Powered 🚀 by Infinisoft Inc.
              https://www.infini-soft.com

              Wanna cook the future? Come in the kitchen
              https://www.kitchen.infini-soft.com

*******************************************************************`)
}



}
