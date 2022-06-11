
import { useMicroContext } from '@/context/micro';
import React from 'react';
import Table from '../table';
import usePaginator, { Paginator } from '../table/paginator';
import { useSearchFilter } from './useSearchFilter';

const _defaultConfig = {
  src: "https://cdn.pixabay.com/photo/2016/03/31/20/31/amazed-1295833__340.png"
}

const ROWS_PER_PAGE = 15

const ContactList = () => {
  const list = useSearchFilter()
  const { paginate, handleGotoPage, currentPage, ...props } = usePaginator({ rowPerPage: ROWS_PER_PAGE, count: list?.size ?? 0, nextToken: '000' })
  const { store } = useMicroContext()
  const [pageSize, setPageSize] = React.useState(ROWS_PER_PAGE);
  const [nextToken, setNextToken] = React.useState('mocktoken');


  const onClick = (SK: string) => {
    window.dispatchEvent(new CustomEvent('item.clicked'))
    store.mutate(prev => ({ ...prev, editItemId: SK }))
  }


  /**
   * Refactor in seperate file
   *
   */
  const columns = {
    avatar: {
      render: (item: API.Item) => <img src={item?.avatar ?? _defaultConfig.src} id={item.SK} style={{ height: '50px', maxWidth: '50px' }} />
    },
    // Subcategory: {},
    name: { render: (item: API.Item) => <div key={item?.name} id={item.SK} onClick={() => onClick(item.SK!)}>{item?.name}</div> },
    telephones: { render: (item: API.Item) => item?.telephones?.map((phone, i) => <div key={phone} id={item.SK}>{phone}</div>) },
    email: { render: (item: API.Item) => <div key={item?.email} id={item.SK}>{item?.email}</div> },
    address: { render: (item: API.Item) => <div key={item?.address} id={item.SK}>{item?.address}</div> },
  }

  return <div style={{ color: 'white', width: '100%'}}>
    <Table columns={columns} data={paginate(list)} />

    <Paginator currentPage={currentPage} handleGotoPage={handleGotoPage} numberOfPage={Math.round((list?.size ?? 1) / pageSize)} rowPerPage={pageSize} nextToken={nextToken} />
  </div>
};

export default ContactList
