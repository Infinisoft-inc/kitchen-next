import config from '@/config/config.json';
import { getToken, GetToken } from '@/core/tokens';
import { context } from '@/data/context';
import React from 'react';

const devtool = config?.verbose

export type IMicroContext = {
  user: typeof context
  getToken: GetToken
}

const initialContext: IMicroContext = {
  user: context,
  getToken,
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
