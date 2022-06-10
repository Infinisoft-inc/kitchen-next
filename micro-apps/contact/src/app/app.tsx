
import Create from '@/components/create';
import React from 'react';
// import { useMicroTheme } from '../context/theme';
import '../style/theme.module.css';
import styles from './index.css';

const Toolbar = React.lazy(() => import(/*webpackPreload: true*/ /* webpackChunkName: 'toolbar' */'../components/toolbar'));
const Header = React.lazy(() => import(/*webpackPreload: true*/ /* webpackChunkName: 'header' */'../components/header'));
const ContactList = React.lazy(() => import(/*webpackPreload: true*/ /* webpackChunkName: 'contactlist' */'../components/contactlist'));
const Details = React.lazy(() => import(/* webpackChunkName: 'Details' */ '../components/details'))

const App = () => {
  // const { liveTheme, ...theme } = useMicroTheme();

  return <div className={styles.root}>
    <Header />
    <Toolbar />


    <ContactList />

    <Details />
    <Create />

    {/* {liveTheme && <LiveConfig {...theme} /> */}
  </div>
};

export default App
