
import { MicroState, useMicroContext } from '@/context/micro';
import ProTable from '@ant-design/pro-table';
import React from 'react';
import { useStore } from '../store';
import { columns } from './columns';

const ContactList = () => {
  // const list = useSearchFilter()
  const { store } = useMicroContext();
  const state = useStore(
    store,
    (state: MicroState) => state)
  const _list = state?.list
  return <div style={{ color: 'white' }}>

    <ProTable
      rowKey={(r) => r?.SK ?? new Date().getTime().toFixed(0)}
      search={false}
      pagination={{
        pageSize: 10,
      }}
      // className={styles['ant-pro-table']}
      dataSource={_list ? Array.from(_list?.values()) : []}
      columns={columns()}
    />
  </div>
};

export default ContactList
