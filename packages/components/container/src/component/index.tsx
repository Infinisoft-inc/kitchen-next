/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Container Federated Micro Component
 */
import React, { Suspense } from 'react';
import css from './index.module.css';
import { ContainerProps } from './types';

const TopBar = React.lazy(() => import(/* webpackChunkName: 'Topbar' */ 'topbar/TopBar'))
const Contact = React.lazy(() => import(/* webpackChunkName: 'Contact' */ 'contact/Contact'))
const ThemeSwitch = React.lazy(() => import(/* webpackChunkName: 'ThemeSwitch' */ 'themeswitch/ThemeSwitch'))

const Container = (props: ContainerProps) => {
  return <Suspense>
    <div className={css.root}>
      <div className={css.container}>
        <div className={css.header}>
          <TopBar
            brandImageUrl='https://www.kitchen.infini-soft.com/assets/infinisoftticon.png'
            menuComponent={<><ThemeSwitch /></>}
          />
        </div>

        <div className={css.section}>
          <div className={css.side}>side menu</div>

          <div className={css.content}>
            <Contact />
          </div>
        </div>

        <div className={css.section}>footer</div>
      </div>
    </div>
  </Suspense>
}

export default Container;
