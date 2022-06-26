
import Create from '@/components/create';
// import '@/style';
import React, { Suspense } from 'react';
import styles from './index.css';

const Toolbar = React.lazy(() => import(/* */ /* webpackChunkName: 'toolbar' */'../components/toolbar'));
const Header = React.lazy(() => import(/* */ /* webpackChunkName: 'header' */'../components/header'));
const ContactList = React.lazy(() => import(/* */ /* webpackChunkName: 'contactlist' */'../components/list'));
const Details = React.lazy(() => import(/* webpackChunkName: 'Details' */ '../components/details'))

const App = () => {


  return <Suspense>
    <div className={styles.root}>
      <Header />
      <Toolbar />
      <ContactList />
      <Details />
      <Create />
    </div>
  </Suspense>
};

export default App
