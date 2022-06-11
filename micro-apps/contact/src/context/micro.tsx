import React from 'react';
import config from '../../config/config.json';
import { createstore, Store } from '../components/store';
import * as listService from "../services/contacts/list";

const devtool = config?.verbose

/**
 * STATE
 */
export type MicroState = {
  list: Map<string, API.Item>
  editItemId: string
  // meta: {
  //   categories?: API.Meta
  //   subCategories?: API.Meta
  // }
}
export type MicroPayload = any
export type MicroStore = Store<MicroState, MicroPayload>

/**
 * OPERATION
 * @returns
 */
export const fetchData = async (): Promise<MicroState> => {
  const result = await listService.list({}) as API.Success
  /**
   * Add useMetaModel also
   */

  const normalized: Map<string, API.Item> = new Map()
  result?.data?.forEach(item => normalized.set(item.SK!, item))

  return {
    list: normalized,
    editItemId: '',
    // meta:{
    //   categories,
    //   subCategories
    // }
  }
}

/**
 * CONTEXT
 */
export type MicroContext = {
  store: MicroStore
}
const initialContext: MicroContext = {
  store: createstore(fetchData, { devtool})
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
