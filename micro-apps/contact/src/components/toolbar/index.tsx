/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';
import css from './index.css';

const Responsive = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'Responsive' */ '../../package/responsive'))
const Create = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'Toolbar.Create' */'./create'));
const Filter = React.lazy(() => import(/* webpackPrefetch: true */ /* webpackChunkName: 'Toolbar.Filter' */'./filter'));
const Search = React.lazy(() => import(/* webpackPreload: true */ /* webpackChunkName: 'Toolbar.Search' */'./search'));

export type ToolBarProps = {};

export const ToolBar: React.FC<ToolBarProps> = (props) => {
  return <span className={css.rootContainer}>
    <Search />

    <Responsive showUp='laptop'>
      <Filter />
    </Responsive>

    <Create />
  </span>;
}
export default ToolBar
