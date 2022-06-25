
import { useMicroContext } from '@/context/micro';
import { useSearchFilter } from '@/hooks/useSearchFilter';
import React from 'react';
import { columns } from './columns';
import css from './index.module.css';

const Table = React.lazy(() => import(/*   */ /* webpackChunkName: 'Table' */ 'table/Table'))

const List = () => {
  const list = useSearchFilter({ source: "contact", _selector: _s => _s?.list })
  const { store } = useMicroContext()

  return <div className={css.listContainer}>
    <Table columns={columns(store)} data={list} options={{ pagination: true, rowPerPage: 5 }} />
  </div>
};

export default List
