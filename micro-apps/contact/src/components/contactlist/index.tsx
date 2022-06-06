
import { MicroState, useMicroContext } from '@/context/micro';
import ProTable from '@ant-design/pro-table';
import React from 'react';
import { useStore } from '../store';
import { columns } from './columns';

const ContactList = () => {
  // const list = useSearchFilter()
  const { store } = useMicroContext();
  const _list = useStore(
    store,
    (state: MicroState) => state?.array)

  return <div style={{ color: 'white' }}>

      <ProTable
        rowKey={'SK'}
        search={false}
        pagination={{
          pageSize: 10,
        }}
        // className={styles['ant-pro-table']}
        dataSource={_list || []}
        columns={columns(store) as any}
      />
  </div>
};

export default ContactList
