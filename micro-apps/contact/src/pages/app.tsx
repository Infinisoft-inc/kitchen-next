
import { LiveConfig } from '@infini-soft/hooks-theme';
import React, { Suspense, useSyncExternalStore } from 'react';
import { useMicroContext } from '../context/micro';
import { useMicroTheme } from '../context/theme';
import { columns } from './deps/columns';
import styles from './index.css';

const ProTable = React.lazy(() => import(/* webpackPreload: true */'@ant-design/pro-table'));
const Create = React.lazy(() => import(/* webpackPreload: true */'./create'));
const Filter = React.lazy(() => import(/* webpackPrefetch: true */'./filter'));
const Read = React.lazy(() => import(/*webpackPreload: true*/'./read'));
const Search = React.lazy(() => import(/* webpackPreload: true */'./search'));

const App = () => {
  const { store } = useMicroContext();
  const { liveTheme, ...theme } = useMicroTheme();
  const microState = useSyncExternalStore(store.subscribe, store.getSnapshot)

// microState.list[0].SK
// store.getSnapshot().list[0].SK
// store.getNormalizedState().get('2')?.SK


  return <div className={styles.root}>
    <Suspense fallback={<h1>Liveconfig</h1>}>
      {liveTheme && <LiveConfig {...theme} />}
    </Suspense>
    <Suspense fallback={<h1>TITLE</h1>}>
      <div
        className={styles.header}
      >
        <h1>Contacts</h1>
      </div>
    </Suspense>

    {
      [<Search key='search-1' />,
      <Filter key='filter-2' />,
      <Create key='create-3' />]
    }

    <Suspense fallback={<h1>Protable</h1>}>
      <ProTable
        rowKey={record => record?.SK || new Date().getTime()}
        search={false}
        // toolBarRender={() => [
        //   <Search key='search-1' />,
        //   <Filter key='filter-2' />,
        //   <Create key='create-3' />
        // ]}
        pagination={{
          pageSize: 10,
        }}
        className={styles['ant-pro-table']}
        loading={microState?.list?.length === 0}
        dataSource={microState?.list}
        columns={columns(store) as any}
      />
    </Suspense>

    <Suspense fallback='read'>
      <Read />
    </Suspense>
  </div>;
};

export default App
