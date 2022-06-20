/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Container Federated Micro Component
 */
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './index.module.css';
import { ContainerProps } from './types';

const TopBar = React.lazy(() => import(/* webpackChunkName: 'Topbar' */ 'topbar/TopBar'))
const Menu = React.lazy(() => import(/* webpackChunkName: 'Contact' */ '@/packages/menu/src/component'))
const ThemeSwitch = React.lazy(() => import(/* webpackChunkName: 'ThemeSwitch' */ 'themeswitch/ThemeSwitch'))

const Container = (props: ContainerProps) => {
  return <Suspense>
    <div className={css.root}>
      <div className={css.headerBg} />
      <nav className={css.side}>
        <Menu />
      </nav>

      <div className={css.container}>
        <header className={css.header}>
          <TopBar
            brandImageUrl='https://www.kitchen.infini-soft.com/assets/infinisoftticon.png'
            menuComponent={<span style={{ width: '100%' }}><ThemeSwitch /></span>}
          />
        </header>

        <main className={css.section}>
          <Outlet />
        </main>

        <footer className={css.section}>
          footer
        </footer>
      </div>
    </div>
  </Suspense>
}

export default Container;
