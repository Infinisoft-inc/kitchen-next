import { Hub, IHub } from "@infini-soft/lib-hub";
import type { OperationFactoryOptions } from "@infini-soft/useoperationfactory";
import React, { useSyncExternalStore } from 'react';
import { useModelSdk } from "../hooks/useModelSdk";
import '../integration/antd.css';
import * as listService from "../services/contacts/list";
import { createstore, IStore } from "./store";

export type UseModelSdkInput = { options?: OperationFactoryOptions }
export type UseModelSdkOutput = ReturnType<typeof useModelSdk>


type MicroContextState = {
  history: typeof history;
  user: {
    isAdmin: boolean;
    Email?: string;
  };
  hub: IHub;
  model?: ReturnType<typeof useModelSdk>;
  list: API.Item[];
  item: API.Item | null,
  store: IStore<API.Item>
}

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
  list: [],
  item: null,
  store: createstore<API.Item>(async () => {
    const result = await listService.list({}) as API.Success

    return result?.data ?? []
  })

};

const MicroContext = React.createContext<MicroContextState>(initialContext);

const store = createstore<API.Item>(async () => {
  const result = await listService.list({}) as API.Success

  return result?.data ?? []
})

const hub = Hub()
const MicroContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {list} = useSyncExternalStore(store.subscribe, store.getSnapshot)

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

  return <MicroContext.Provider value={{ ...context, hub, list, store }}>
    {children}
  </MicroContext.Provider>
}

export const useMicroContext = () => {
  return React.useContext<MicroContextState>(MicroContext);
};

export default MicroContextProvider
