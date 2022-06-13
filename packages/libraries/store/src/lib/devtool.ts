/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { IStore } from "../types";

export const devtool = <S, P>(store: IStore<S, P> & {state: S}) => {

  if (typeof window === 'object' && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined') {
    //@ts-ignore
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({ trace: true });
    devTools.subscribe((message: any) => {
      if (message.type === 'DISPATCH' && message.state) {
        console.log('DevTools requested to change the state to', message.state);
      }
      console.log(`message  = `, message)

    });

    setTimeout(()=>{
      devTools.init(store.state);

      store.subscribe((event, state, payload) => {
        console.log(`subscribe event state opaylaod`, event, state, payload)
        devTools.send(event, state)
      })

    }, 1500)





  } else {
    console.error(`
*******************************************************************
                      verbose ENABLED
              Redux devtool extension not found!

 _____ _   _ ______ _____ _   _ _____  _____  ____  ______ _______
 |_   _| \ | |  ____|_   _| \ | |_   _|/ ____|/ __ \|  ____|__   __|
   | | |  \| | |__    | | |  \| | | | | (___ | |  | | |__     | |
   | | | .   |  __|   | | | .   | | |  \___ \| |  | |  __|    | |
  _| |_| |\  | |     _| |_| |\  |_| |_ ____) | |__| | |       | |
 |_____|_| \_|_|    |_____|_| \_|_____|_____/ \____/|_|       |_|


              Powered 🚀 by Infinisoft Inc.
              https://www.infini-soft.com

              Wanna cook the future? Come in the kitchen
              https://www.kitchen.infini-soft.com

*******************************************************************`)
  }



}
