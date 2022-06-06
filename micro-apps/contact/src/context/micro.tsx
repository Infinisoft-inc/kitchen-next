import React from 'react';
import { createstore, Store } from '../components/store';
import * as listService from "../services/contacts/list";

/**
 * STATE
 */
export type MicroState = {
  list: Map<string, API.Item>
  array: Array<API.Item>
  editItemId: string
}
export type MicroPayload = any
export type MicroStore = Store<MicroState, MicroPayload>

/**
 * OPERATION
 * @returns
 */
export const fetchData = async (): Promise<MicroState> => {
  const result = await listService.list({}) as API.Success

  const normalized: Map<string, API.Item> = new Map()
  result?.data?.forEach(item => normalized.set(item.SK!, item))

  return {
    array: result?.data ?? [],
    list: normalized,
    editItemId: ''
  }
}

/**
 * CONTEXT
 */
export type MicroContext = {
  store: MicroStore
}
const initialContext: MicroContext = {
  store: createstore(fetchData)
};
const MicroContext = React.createContext(initialContext);
const MicroContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <MicroContext.Provider value={{ ...initialContext }}>
    {children}
  </MicroContext.Provider>
}
export const useMicroContext = () => {
  return React.useContext(MicroContext);
};

export default MicroContextProvider
