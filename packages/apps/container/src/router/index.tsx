/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react";
import {
  MemoryRouter, Route, Routes
} from "react-router-dom";

const Contact = React.lazy(() => import(/* webpackChunkName: 'Contact' */ 'contactmui/Contact'))
const Layout = React.lazy(() => import(/* webpackChunkName: 'Layout' */ '@/component'))

const Tukette = () => {
  return <><h1 style={{ marginTop: '6rem' }}>Tuck suckette</h1></>
}

const Router = () => <MemoryRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route path="contact" element={<Contact />} />
      <Route path="org" element={<Tukette />} />
    </Route>
  </Routes>
</MemoryRouter>

export default Router
