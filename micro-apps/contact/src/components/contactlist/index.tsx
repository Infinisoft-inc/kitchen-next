
import { useMicroContext } from '@/context/micro';
import React from 'react';
import { columns } from './columns';
import css from './index.module.css';
import { useSearchFilter } from './useSearchFilter';

const Table = React.lazy(() => import(/* webpackChunkName: 'Table' */ 'table/Table'))

const ContactList = () => {
  const list = useSearchFilter()
  const { store } = useMicroContext()

  return <div className={css.listContainer}>
    <Table columns={columns(store)} data={list} options={{pagination:true, rowPerPage:5}} />
  </div>
};

export default ContactList
