
import { useMicroContext } from '@/context/micro';
import ProTable from '@ant-design/pro-table';
import React, { useCallback, useSyncExternalStore } from 'react';
import { columns } from './columns';

const ContactList = () => {
  // const list = useSearchFilter()
  const { store } = useMicroContext();
  // const _list = useStore(
  //   store,
  //   (state: MicroState) => state?.list)

    const {list:_list} = useSyncExternalStore(
      store.subscribe,
      useCallback(() => store.getState(), [store])
    )

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
