/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';

const Create = React.lazy(() => import(/* webpackPreload: true */'./create'));
const Filter = React.lazy(() => import(/* webpackPrefetch: true */'./filter'));
const Search = React.lazy(() => import(/* webpackPreload: true */'./search'));

export type ToolBarProps = {};

export const ToolBar: React.FC<ToolBarProps> = (props) => {
  return <>
    <Search />
    <Filter />
    <Create />
  </>;
}
export default ToolBar
