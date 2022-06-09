
import React from 'react';
import Table from '../table';
import { useSearchFilter } from './useSearchFilter';

const _defaultConfig = {
  src: "https://cdn.pixabay.com/photo/2016/03/31/20/31/amazed-1295833__340.png"
}

const ContactList = () => {
  const list = useSearchFilter()

  const columns = {
    avatar: {
      render: (item: API.Item) => <img src={item?.avatar ?? _defaultConfig.src}  id={item.SK} style={{ height: '50px', maxWidth: '50px' }} />
    },
    // Subcategory: {},
    name: { render: (item: API.Item) => <div key={item?.name} id={item.SK}>{item?.name}</div> },
    telephones: { render: (item: API.Item) => item?.telephones?.map((phone, i) => <div key={phone} id={item.SK}>{phone}</div>) },
    email:  { render: (item: API.Item) => <div key={item?.email} id={item.SK}>{item?.email}</div> },
    address: { render: (item: API.Item) => <div key={item?.address} id={item.SK}>{item?.address}</div> },
  }

  return <div style={{ color: 'white' }}>
    <Table columns={columns} data={list} />
  </div>
};

export default ContactList
