import { load } from "@infini-soft/lib-federation";
import { Hub, IHub } from "@infini-soft/lib-hub";
import type { OperationFactoryOptions } from "@infini-soft/useoperationfactory";
import React, { useSyncExternalStore } from 'react';
import { IStore, Store } from "store/types";
import { useModelSdk } from "../hooks/useModelSdk";
import * as listService from "../services/contacts/list";

export type UseModelSdkInput = { options?: OperationFactoryOptions }
export type UseModelSdkOutput = ReturnType<typeof useModelSdk>

import(/* webpackPreload: true */ 'store/createstore')
const createstore: Store = await load('store', 'createstore')

export type MicroState =  {
  list: API.Item[]
  itemSelectedId?: string
}
export type MicroPayload = API.Item
export type ContactStore = IStore<MicroState, MicroPayload, string, API.Item>

export type MicroContextState = {
  history: typeof history;
  user: {
    isAdmin: boolean;
    Email?: string;
  };
  hub: IHub;
  model?: ReturnType<typeof useModelSdk>;
  store: ContactStore
}

const store = createstore<MicroState, any, keyof MicroState, API.Item>(async () => {
  const result = await listService.list({}) as API.Success

  return {list: result?.data ?? [], itemSelectedId: ''} //as MicroState
}, {normalizeKeys: ['list'], keyPredicat: item => item.SK })

const initialContext: MicroContextState = {
  history,

  /**
   * SECURITY
   */
  user: {
    isAdmin: false
  },

  /**
 * IPC
 */
  hub: Hub(),
  // item: null,
  store
};

const MicroContext = React.createContext<MicroContextState>(initialContext);

const hub = Hub()
const MicroContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const contactList = useSyncExternalStore(store.subscribe, store.getSnapshot)

  //   const def = useDeferredValue({..._storeSnapshot,store})
  // const storeSnapshot = React.useMemo(()=>def, [def.list])

  // const options = { ...config, hub, source: config.appName }
  // const model = useModelSdk({ options })

  // React.useEffect(() => {
  //   const s: (() => void)[] = []
  //   s.push(hub.subscribe(persistentModelPlugin(model)))
  //   s.push(hub.subscribe(persistentCleanupPlugin(model)))
  //   s.push(hub.subscribe(antdNotificationPlugin(model)))
  //   s.push(hub.subscribe(modelPlugin(model)))
  //   s.push(hub.subscribe(operationPlugin(model)))

  //   if (config.verbose) {
  //     s.push(hub.subscribe(consoleplugin))
  //   }

  //   return () => { s.forEach(unsubscribe => unsubscribe()) }
  // }, [model])

  const [context,] = React.useState(initialContext);

  return <MicroContext.Provider value={{ ...context, hub, store}}>
    {children}
  </MicroContext.Provider>
}

export const useMicroContext = () => {
  return React.useContext<MicroContextState>(MicroContext);
};

export default MicroContextProvider
