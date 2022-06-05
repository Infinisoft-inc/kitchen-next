
import React from 'react';
import { useMicroTheme } from '../context/theme';
import styles from './index.css';

const ContactDetails = React.lazy(() => import(/*webpackPreload: true*/'../components/contactdetails'));
const Toolbar = React.lazy(() => import(/*webpackPreload: true*/'../components/toolbar'));
const Header = React.lazy(() => import(/*webpackPreload: true*/'../components/header'));
const ContactList = React.lazy(() => import(/*webpackPreload: true*/'../components/contactlist'));
const AddContact = React.lazy(() => import(/*webpackPreload: true*/'../components/addcontact'))

const App = () => {
  const { liveTheme, ...theme } = useMicroTheme();

  return <div className={styles.root}>

    <Header />
    <Toolbar />

    <ContactList />

    <AddContact />
    <ContactDetails />

    {/* {liveTheme && <LiveConfig {...theme} />} */}

  </div>
};

export default App
