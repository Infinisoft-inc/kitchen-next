/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Micro app entry point
 * Context Provider is created with localization, configuration andlogging
 */

import { Layout } from 'antd';
import React, { Suspense } from 'react';
import './styles.css';
const { Sider, Content, Footer, Header } = Layout

const Index = React.lazy(() => import('contact/Index'));
const Button = React.lazy(() => import('button/Button'));

const App = () => {
  return (<Suspense fallback="container">
    <Layout>
      <Header className='topbar'>
      </Header>

      <Layout>
        <Sider>left sidebar</Sider>

        <Content>
          <Index />
          <Button message='11'/>
        </Content>

      </Layout>

      <Footer>footer</Footer>
    </Layout>
  </Suspense>
  );
};

export default App;
