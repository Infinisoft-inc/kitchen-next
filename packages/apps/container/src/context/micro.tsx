import config from '@/config/config.json';
import React from 'react';

const devtool = config?.verbose

export type IMicroContext = {
}

const initialContext: IMicroContext = {
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
