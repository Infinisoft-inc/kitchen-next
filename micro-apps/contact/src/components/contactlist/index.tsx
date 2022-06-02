
import ProTable from '@ant-design/pro-table';
import React, { Suspense, useSyncExternalStore } from 'react';
import { useMicroContext } from '../../context/micro';
import { columns } from './columns';
import styles from './index.css';

const ContactList = () => {
  const { store } = useMicroContext();
  const microState = useSyncExternalStore(store.subscribe, store.getSnapshot)

  return  <Suspense fallback={<h1>Protable</h1>}>
      <ProTable
        rowKey={record => record?.SK || new Date().getTime()}
        search={false}
        pagination={{
          pageSize: 10,
        }}
        className={styles['ant-pro-table']}
        loading={microState?.list?.length === 0}
        dataSource={microState?.list}
        columns={columns(store) as any}
      />
    </Suspense>
};

export default ContactList
