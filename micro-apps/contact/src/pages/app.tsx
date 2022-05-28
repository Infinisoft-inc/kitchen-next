
import { ActionType } from '@ant-design/pro-table';
import { LiveConfig } from '@infini-soft/hooks-theme';
import { PageHeader, Typography } from 'antd';
import React, { Suspense, useRef } from 'react';
import { useMicroContext } from '../context/micro';
import { useMicroTheme } from '../context/theme';
import { BackArrow } from './assets/svg';
import { columns } from './deps/columns';
import styles from './index.css';

const ProTable = React.lazy(() => import(/* webpackPreload: true */'@ant-design/pro-table'));
const Create = React.lazy(() => import(/* webpackPreload: true */'./create'));
const Filter = React.lazy(() => import(/* webpackPrefetch: true */'./filter'));
const Read = React.lazy(() => import(/*webpackPreload: true*/'./read'));
const Search = React.lazy(() => import(/* webpackPrefetch: true */'./search'));

const App = () => {
  const actionRef = useRef<ActionType>();
  const {list,store, model, item} = useMicroContext();
  const { liveTheme, ...theme } = useMicroTheme();

  React.useEffect(() => {
    document.querySelector('[aria-label="reload"]')?.addEventListener('click', () => model?.operations.list.run({}));
    // model?.operations.list.run({})
  }, []);

  return <div className={styles.root}>
    <Suspense fallback={<h1>Liveconfig</h1>}>
      {liveTheme && <LiveConfig {...theme} />}
    </Suspense>
    <Suspense fallback={<h1>TITLE</h1>}>
      <PageHeader
        className={styles.header}
        backIcon={<><BackArrow /></>}
        onBack={() => { }}
        title={<Typography.Title level={1}>Contacts</Typography.Title>} />
    </Suspense>

    <Suspense fallback={<h1>Protable</h1>}>
      <ProTable
        actionRef={actionRef}
        rowKey={record => record?.SK || new Date().getTime()}
        search={false}
        toolBarRender={() => [
          <Search key='search-1' />,
          <Filter key='filter-2' />,
          <Create key='create-3' />
        ]}
        pagination={{
          pageSize: 10,
        }}
        className={styles['ant-pro-table']}
        loading={list.length===0}
        dataSource={list}
        columns={columns(store) as any}
        />
    </Suspense>

    <Suspense fallback='read'>
      <Read />
    </Suspense>
  </div>;
};

export default App
