
import ProTable from '@ant-design/pro-table';
import React, { Suspense } from 'react';
import styles from './index.css';
import { useSearchFilter } from './useSearchFilter';

const ContactList = () => {
  const list = useSearchFilter()
  // const { store } = useMicroContext();

return <Suspense fallback={<h1>Protable</h1>}>
    <ProTable
      rowKey={record => record?.SK || new Date().getTime()}
      search={false}
      pagination={{
        pageSize: 10,
      }}
      className={styles['ant-pro-table']}
      // dataSource={list}
      // columns={columns(store) as any}
    />
  </Suspense>
};

export default ContactList
