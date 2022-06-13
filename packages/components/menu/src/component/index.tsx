/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Menu Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import css from './index.module.css';
import { MenuProps } from './types';

import React from 'react';
import { defaultAvatar } from './assets';

const Responsive = React.lazy(() => import(/* webpackChunkName: 'Responsive' */ 'responsive/Responsive'))

const Menu = (props: MenuProps, ref: ForwardedRef<unknown>) => {

  return <Suspense>
    <Responsive showUp='laptop'>
      <ul className={css.item}>
        <ol>Accouting</ol>
        <ol>Operations</ol>
        <ol className={css.myProfile}>
          <img className={css.profilImage} src={defaultAvatar} />
          Martin Ouimet
        </ol>
      </ul>
    </Responsive>
  </Suspense>
}

export default forwardRef<unknown, MenuProps>(Menu);
