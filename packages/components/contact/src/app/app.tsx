
import Create from '@/components/create';
import '@/style';
import React from 'react';
import styles from './index.css';

const Toolbar = React.lazy(() => import(/* */ /* webpackChunkName: 'toolbar' */'../components/toolbar'));
const Header = React.lazy(() => import(/* */ /* webpackChunkName: 'header' */'../components/header'));
const ContactList = React.lazy(() => import(/* */ /* webpackChunkName: 'contactlist' */'../components/list'));
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
