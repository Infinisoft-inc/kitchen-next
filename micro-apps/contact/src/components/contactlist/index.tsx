
import { MicroState, useMicroContext } from '@/context/micro';
import React from 'react';
import { useStore } from '../store';
import Table from '../table';

const _defaultConfig = {
  src: "https://cdn.pixabay.com/photo/2016/03/31/20/31/amazed-1295833__340.png"
}

const ContactList = () => {
  // const list = useSearchFilter()
  const { store } = useMicroContext();
  const state = useStore(
    store,
    (state: MicroState) => state)
  const _list = state?.list

  const columns = {
    avatar: {
      render: (item: API.Item) => <img src={item?.avatar ?? _defaultConfig.src} style={{ height: '50px', maxWidth: '50px' }} />
    },
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
