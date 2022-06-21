import config from '@/config/config.json';
import { context } from '@/data/context';
import React from 'react';

const devtool = config?.verbose

export type IMicroContext = {
  user: typeof context
}

const initialContext: IMicroContext = {
  user: context
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
