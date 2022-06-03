import { load } from "@infini-soft/lib-federation";
import React from 'react';
import { IStore, Store } from "store/types";
import * as listService from "../services/contacts/list";

import(/* webpackPreload: true */ 'store/createstore')

const createstore: Store = await load('store', 'createstore')

export type MicroState = {
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
  store: ContactStore
}

const store = createstore<MicroState, any, keyof MicroState, API.Item>(async () => {
  const result = await listService.list({}) as API.Success

  return { list: result?.data ?? [], itemSelectedId: '' }
}, { normalizeKeys: ['list'], keyPredicat: item => item.SK })


// const filterCooker: CookersEventHandler<MicroState, any> = (event, state, payload) => {
//   console.log(`COOKER `, event, payload)

//   if (event.includes('filter.add')) {
//     console.log(`Add filter`);
//     return {...state, list: state?.list.filter(item => JSON.stringify(item).includes(payload)) ?? []}
//   }

//   if (event.includes('filter.clear')) {
//     console.log(`clear filter`);
//     return state || {list:[]}
//   }

//   return state || {list:[]}
// }

// store.cook(filterCooker)

const initialContext: MicroContextState = {
  history,
  user: {
    isAdmin: false
  },
  store
};

const MicroContext = React.createContext<MicroContextState>(initialContext);

const MicroContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MicroContext.Provider value={{ ...initialContext, store }}>
    {children}
  </MicroContext.Provider>
}

export const useMicroContext = () => {
  return React.useContext<MicroContextState>(MicroContext);
};

export default MicroContextProvider
