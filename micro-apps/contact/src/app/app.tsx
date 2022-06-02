
import { LiveConfig } from '@infini-soft/hooks-theme';
import React, { Suspense } from 'react';
import { useMicroTheme } from '../context/theme';
import styles from './index.css';

const ContactDetails = React.lazy(() => import(/*webpackPreload: true*/'../components/contactdetails'));
const Toolbar = React.lazy(() => import(/*webpackPreload: true*/'../components/toolbar'));
const Header = React.lazy(() => import(/*webpackPreload: true*/'../components/header'));
const ContactList = React.lazy(() => import(/*webpackPreload: true*/'../components/contactlist'));

const App = () => {
  const { liveTheme, ...theme } = useMicroTheme();

  return <div className={styles.root}>

    <Header />
    <Toolbar />

    <ContactList />

    <Suspense fallback='read'>
      <ContactDetails />
    </Suspense>

    <Suspense fallback={<h1>Liveconfig</h1>}>
      {liveTheme && <LiveConfig {...theme} />}
    </Suspense>

  </div>
};

export default App
