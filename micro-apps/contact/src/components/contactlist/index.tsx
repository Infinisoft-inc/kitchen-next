
import { useMicroContext } from '@/context/micro';
import React, { useMemo } from 'react';
import '../../style/responsive.css';
import Table from '../table';
import usePaginator, { Paginator } from '../table/paginator';
import { columns } from './columns';
import css from './index.module.css';
import { useSearchFilter } from './useSearchFilter';

const ROWS_PER_PAGE = 5

const ContactList = () => {
  const list = useSearchFilter()
  const { paginate, handleGotoPage, currentPage, _numberOfPage } = usePaginator({ rowPerPage: ROWS_PER_PAGE, count: list?.size ?? 0, nextToken: '000' })
  const { store } = useMicroContext()
  const [pageSize, setPageSize] = React.useState(ROWS_PER_PAGE);
  const [nextToken, setNextToken] = React.useState('mocktoken');
  const pagedList = useMemo(() => paginate(list), [paginate, list])




  return <div className={css.listContainer}>
    <Table columns={columns(store)} data={pagedList} />

    <Paginator currentPage={currentPage} handleGotoPage={handleGotoPage} numberOfPage={_numberOfPage} rowPerPage={pageSize} nextToken={nextToken} />
  </div>
};

export default ContactList
