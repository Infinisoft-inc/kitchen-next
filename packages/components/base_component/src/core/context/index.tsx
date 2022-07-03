
import { ExtendMicroStoreEventsPayload, ExtendMicroStoreState } from '@/component/types';
import configuration from '@/config/config.json';
import { initializeStore } from '@/config/initializers';
import type { IConfig, ILogger } from '@/core/types';
import { IStore, Store } from "@infini-soft/store";
import React from 'react';

export type IMicroStorePayloads = ExtendMicroStoreEventsPayload
export type IMicroStoreState = ExtendMicroStoreState
export type IMicroStore = IStore<IMicroStoreState, IMicroStorePayloads>
export type IMicroContext = {
  store: IMicroStore
  config: IConfig
  log: ILogger
}

const initialContext: IMicroContext = {
  store: new Store<IMicroStoreState, IMicroStorePayloads>(initializeStore, {devtool: configuration.devtools}),
  config: configuration as IConfig,
  log: console.log
}

const MicroContext = React.createContext(initialContext);

type MicroContextProviderProps = { children: React.ReactNode, context?: IMicroContext }
const MicroContextProvider = ({ children, context=initialContext }: MicroContextProviderProps) =>
  <MicroContext.Provider value={{ ...context }}>
    {children}
  </MicroContext.Provider>

export const useMicroContext = () => React.useContext(MicroContext);
export default MicroContextProvider
