/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react";
import {
  MemoryRouter, Route, Routes
} from "react-router-dom";
import context from '../../data/security.context.json';

const Contact = React.lazy(() => import(/* webpackChunkName: 'Contact' */ 'contactmui/Contact'))
const Layout = React.lazy(() => import(/* webpackChunkName: 'Layout' */ '@/component'))

export const Mock = ({ title }: { title: string }) => {
  return <><h1 style={{ marginTop: '6rem' }}>{title}</h1></>
}

type IRoute = {
  path: string
  element: JSX.Element
}

const steve = {
  name: 'steve',
  quality: 'steve'
}

export const routes: IRoute[] = [
  // @ts-ignore
  { path: "contact", element: <Contact context={context} /> },
  { path: "org", element: <Mock title='org' /> },
  { path: "cases", element: <Mock title='cases' /> },
  { path: "dashboard", element: <Mock title='dashboard' /> },
]

const Router = () => <MemoryRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      {routes.map((props) => <Route key={new Date().getTime().toFixed(0)} {...props} />)}
    </Route>
  </Routes>
</MemoryRouter>

export default Router
