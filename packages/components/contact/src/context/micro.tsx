import config from '@/config/config.json';
import { CrudMutators, InputMutatorGeneric, UseListMutatorGeneric } from "@/hooks";
import * as listService from "@/services/contacts/list";
import { metacategory } from "@/services/contacts/metacategory";
import { metasubcategory } from "@/services/contacts/metasubcategory";
import { IStore, Store, UseMutatorGeneric } from "@infini-soft/store";
import React from 'react';

const devtool = config?.verbose

/**
 * This is the implementation part of app not the lib
 *  */
export type UseMutator = UseMutatorGeneric<keyof  API.Itemv2, any, void>
export type InputMutator = InputMutatorGeneric<any, React.ChangeEvent<HTMLInputElement>>
export type UseListMutator = UseListMutatorGeneric<keyof  API.Itemv2, CrudMutators>
export type InputListMutator = InputMutatorGeneric<keyof  API.Itemv2, React.ChangeEvent<HTMLInputElement>>
export type UseItem = UseItemGeneric< API.Itemv2>
export type UseItemGeneric<T> = (field: string) => { item: T, inputMutator: InputMutator, listMutator: UseListMutator, useMutator: UseMutator, destroy: Destroy }
type Destroy = () => void

/**
 * STATE
 */
export type MicroState = {
  list: Record<string,  API.Itemv2>
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

  const normalized: Record<string,  API.Itemv2> =  result?.data?.reduce((acc: Record<string,  API.Itemv2>, item) => ({...acc, [item.SK!]: item}), {})

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
