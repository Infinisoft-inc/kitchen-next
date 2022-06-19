
import Create from '@/components/create';
import '@/style';
import React from 'react';
import styles from './index.css';

const Toolbar = React.lazy(() => import(/*webpackPrefetch: false*/ /* webpackChunkName: 'toolbar' */'../components/toolbar'));
const Header = React.lazy(() => import(/*webpackPrefetch: false*/ /* webpackChunkName: 'header' */'../components/header'));
const ContactList = React.lazy(() => import(/*webpackPrefetch: false*/ /* webpackChunkName: 'contactlist' */'../components/list'));
const Details = React.lazy(() => import(/* webpackChunkName: 'Details' */ '../components/details'))

const App = () => {
  return <div className={styles.root}>
    <Header />
    <Toolbar />

    <ContactList />

    <Details />
    <Create />
  </div>
};

export default App
