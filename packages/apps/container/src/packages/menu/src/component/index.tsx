/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */

import React from "react";
import css from './index.module.css';

const Header = React.lazy(() => import(/* webpackChunkName: 'Header' */ './header'))
const Links = React.lazy(() => import(/* webpackChunkName: 'Links' */ './links'))

const Menu = () => {
  return <nav className={css.menu}>
    <Header />
    <Links />
  </nav>
}

export default Menu;
