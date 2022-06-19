
import { useMicroContext } from '@/context/micro';
import { useSearchFilter } from '@/hooks/useSearchFilter';
import React from 'react';
import { columns } from './columns';
import css from './index.module.css';

const Table = React.lazy(() => import(/* webpackPrefetch: false */ /* webpackChunkName: 'Table' */ 'table/Table'))
const Button = React.lazy(() => import(/* webpackPrefetch: false */ /* webpackChunkName: 'Button' */ '@mui/material/Button'))

const List = () => {
  const list = useSearchFilter()
  const { store } = useMicroContext()

  return <div className={css.listContainer}>
    <Button variant="contained">Hello World</Button>
    <Table columns={columns(store)} data={list} options={{ pagination: true, rowPerPage: 5 }} />
  </div>
};

export default List
