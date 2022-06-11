/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { IStore } from "../types";

export const devtool = <S, P>(store: IStore<S, P>) => {

  if (typeof window === 'object' && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined') {
    //@ts-ignore
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({ trace: true });
    devTools.subscribe((message: any) => {
      if (message.type === 'DISPATCH' && message.state) {
        console.log('DevTools requested to change the state to', message.state);
      }
    });

    devTools.init(store.getState);
    store.subscribe(devTools.send)

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
