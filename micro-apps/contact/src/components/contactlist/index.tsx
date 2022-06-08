
import { MicroState, useMicroContext } from '@/context/micro';
import React from 'react';
import { useStore } from '../store';
import Table from '../table';

const ContactList = () => {
  // const list = useSearchFilter()
  const { store } = useMicroContext();
  const state = useStore(
    store,
    (state: MicroState) => state)
  const _list = state?.list
  const columns = {
    name: {
    },
    address: {},
    website: {},
    telephones: { render: (item: API.Item) => item?.telephones?.map((phone, i) => <div key={phone}>{phone}</div>) },
  }

  return <div style={{ color: 'white' }}>
    <Table columns={columns} data={_list} />
  </div>
};

export default ContactList
