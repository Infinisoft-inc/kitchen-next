import { Store, UseMutatorGeneric } from "@infini-soft/store";
import React from 'react';
import config from '../../config/config.json';
import { CrudMutators, InputMutatorGeneric, UseListMutatorGeneric } from "./useItem";

import { metacategory } from "@/services/contacts/metacategory";
import { metasubcategory } from "@/services/contacts/metasubcategory";
import { IStore } from "@infini-soft/store/src/types";
import * as listService from "../services/contacts/list";

const devtool = config?.verbose

/**
 * This is the implementation part of app not the lib
 *  */
export type UseMutator = UseMutatorGeneric<keyof API.Item, any, void>
/**
 * Any in intended to use it InputMutator with anything
 */
export type InputMutator = InputMutatorGeneric<any, React.ChangeEvent<HTMLInputElement>>
export type UseListMutator = UseListMutatorGeneric<keyof API.Item, CrudMutators>
export type InputListMutator = InputMutatorGeneric<keyof API.Item, React.ChangeEvent<HTMLInputElement>>
export type UseItem = UseItemGeneric<API.Item>
export type UseItemGeneric<T> = (field: string) => { item: T, inputMutator: InputMutator, listMutator: UseListMutator, useMutator: UseMutator, destroy: Destroy }
type Destroy = () => void

/**
 * STATE
 */
export type MicroState = {
  list: Record<string, API.Item>
  editItemId: string
  meta?: {
    categories?: API.Meta
    subCategories?: API.Meta
  }
}
export type MicroPayload = unknown
export type MicroStore = IStore<MicroState, MicroPayload>

/**
 * OPERATION
 * @returns
 */
export const fetchData = async (filter = '',): Promise<MicroState> => {
  const result: API.Success = await listService.list({})

  const normalized: Record<string, API.Item> =  result?.data?.reduce((acc: Record<string, API.Item>, item) => ({...acc, [item.SK!]: item}), {})


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
export type IMicroContext = {
  store: MicroStore
}
const initialContext: IMicroContext = {
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
