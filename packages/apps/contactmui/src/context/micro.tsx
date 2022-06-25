//@ts-nocheck
import config from '@/config/config.json';
import { CrudMutators, InputMutatorGeneric, UseListMutatorGeneric } from "@/hooks";
import { UseMutatorGeneric } from '@/hooks/types';
import { Item, Meta } from '@/models';
import * as listService from "@/services/contacts/list";
import { IStore, Store } from "@infini-soft/store";
import React from 'react';

const devtool = config?.verbose

/**
 * This is the implementation part of app not the lib
 *  */
export type UseMutator = UseMutatorGeneric<keyof  Item, any, void>
export type InputMutator = InputMutatorGeneric<any, React.ChangeEvent<HTMLInputElement>>
export type UseListMutator = UseListMutatorGeneric<keyof  Item, CrudMutators>
export type InputListMutator = InputMutatorGeneric<keyof  Item, React.ChangeEvent<HTMLInputElement>>
export type UseItem = UseItemGeneric< Item>
export type UseItemGeneric<T> = (field: string) => { item: T, inputMutator: InputMutator, listMutator: UseListMutator, useMutator: UseMutator, destroy: Destroy }
type Destroy = () => void

/**
 * STATE
 */
export type MicroState = {
  list: Record<string, Item>
  editItemId: string
  meta?: {
    categories?: Meta
    subCategories?: Meta
  }
}
export type MicroPayload = unknown
export type MicroStore = IStore<MicroState, MicroPayload>

/**
 * Micro Context
 */
export type IMicroContext = {
  store: MicroStore
}

const initialContext: IMicroContext = {
  store: new Store(listService.list, { devtool })
};
const MicroContext = React.createContext(initialContext);

const MicroContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <MicroContext.Provider value={{ ...initialContext }}>
    {children}
  </MicroContext.Provider>
}

/**
 * Micro context hook
 * @returns micro context
 */
export const useMicroContext = () => {
  return React.useContext(MicroContext);
};

export default MicroContextProvider
