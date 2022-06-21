/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context';
import React from 'react';
import css from './index.module.css';

const AvatarUpload = React.lazy(() => import(/*   */ /*  webpackChunkName: 'AvatarUpload' */ 'avatarupload/AvatarUpload'))

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props) => {
  const {user} = useMicroContext()
  return <header className={css.headerRoot}>

    <AvatarUpload src={user.avatar} />

  </header>
}
export default Header
