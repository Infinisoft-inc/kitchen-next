import React from 'react';
import * as listService from "../services/contacts/list";

export type MicroContextState = {
  history: typeof history;
  user: {
    isAdmin: boolean;
    Email?: string;
  };
}

const fetchData = async () => {
  const result = await listService.list({}) as API.Success

  return { list: result?.data ?? [], itemSelectedId: '' }
}

const initialContext: MicroContextState = {
  history,
  user: {
    isAdmin: false
  },
};

const MicroContext = React.createContext<MicroContextState>(initialContext);

const MicroContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MicroContext.Provider value={{ ...initialContext }}>
    {children}
  </MicroContext.Provider>
}

export const useMicroContext = () => {
  return React.useContext<MicroContextState>(MicroContext);
};

export default MicroContextProvider
