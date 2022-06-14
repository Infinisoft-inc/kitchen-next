import { Store, UseMutatorGeneric } from "@infini-soft/store";
import React from 'react';
import config from '../../config/config.json';
import { CrudMutators, InputMutatorGeneric, UseListMutatorGeneric } from "./useItem";

import { metacategory } from "@/services/contacts/metacategory";
import { metasubcategory } from "@/services/contacts/metasubcategory";
import * as listService from "../services/contacts/list";

const devtool = config?.verbose

/**
 * This is the implementation part of app not the lib
 *  */
export type UseMutator = UseMutatorGeneric<keyof API.Item, any, void>
export type InputMutator = InputMutatorGeneric<keyof API.Item, React.ChangeEvent<HTMLInputElement>>
export type UseListMutator = UseListMutatorGeneric<keyof API.Item, CrudMutators>
export type InputListMutator = InputMutatorGeneric<keyof API.Item, React.ChangeEvent<HTMLInputElement>>
export type UseItem = UseItemGeneric<API.Item>
export type UseItemGeneric<T> = (field: string) => { item: T, inputMutator: InputMutator, listMutator: UseListMutator, useMutator: UseMutator, destroy: Destroy }
type Destroy = () => void

/**
 * STATE
 */
export type MicroState = {
  list: Map<string, API.Item>
  editItemId: string
  meta?: {
    categories?: API.Meta
    subCategories?: API.Meta
  }
}
export type MicroPayload = any
export type MicroStore = Store<MicroState, MicroPayload>

/**
 * OPERATION
 * @returns
 */
export const fetchData = async (filter = '',): Promise<MicroState> => {
  const result: API.Success = await listService.list({})

  const normalized: Map<string, API.Item> = new Map()
  result?.data?.forEach(item => normalized.set(item.SK!, item))

  return {
    list: normalized,
    editItemId: '',
    meta: {
      categories: (await metacategory({ SK: `${config.appName}__${filter}` })),
      subCategories: (await metasubcategory({ SK: `${config.appName}__${filter}` }))
    }
  }
}

/**
 * CONTEXT
 */
export type MicroContext = {
  store: MicroStore
}
const initialContext: MicroContext = {
  store: new Store(fetchData, { devtool })
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
