
import Create from '@/components/create';
import React from 'react';
// import { useMicroTheme } from '../context/theme';
import '../style/theme.module.css';
import styles from './index.css';

const Toolbar = React.lazy(() => import(/*webpackPreload: true*/'../components/toolbar'));
const Header = React.lazy(() => import(/*webpackPreload: true*/'../components/header'));
const ContactList = React.lazy(() => import(/*webpackPreload: true*/'../components/contactlist'));
const Details = React.lazy(() => import(/* webpackChunkName: 'Details' */ '../components/details'))

const App = () => {
  // const { liveTheme, ...theme } = useMicroTheme();

  return <div className={styles.root}>
    <Header />
    <Toolbar />

    <Details>
      <ContactList />
    </Details>

    <Create  />

    {/* {liveTheme && <LiveConfig {...theme} /> */}
  </div>
};

export default App
