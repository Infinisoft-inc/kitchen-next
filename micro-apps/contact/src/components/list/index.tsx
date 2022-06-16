
import { useMicroContext } from '@/context/micro';
import React from 'react';
import { useSearchFilter } from '../../hooks/useSearchFilter';
import { columns } from './columns';
import css from './index.module.css';

const Table = React.lazy(() => import(/* webpackChunkName: 'Table' */ 'table/Table'))

const List = () => {
  const list = useSearchFilter()
  const { store } = useMicroContext()

  return <div className={css.listContainer}>
    <Table columns={columns(store)} data={list} options={{pagination:true, rowPerPage:5}} />
  </div>
};

export default List
