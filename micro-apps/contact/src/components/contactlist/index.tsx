
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
      render: (item: API.Item) => <img src={item?.avatar ?? _defaultConfig.src} style={{ height: '50px', maxWidth: '50px' }} />
    },
    Subcategory: {},
    name: {},
    telephones: { render: (item: API.Item) => item?.telephones?.map((phone, i) => <div key={phone}>{phone}</div>) },
    email: {},
    address: {},
  }

  return <div style={{ color: 'white' }}>
    <Table columns={columns} data={list} />
  </div>
};

export default ContactList
