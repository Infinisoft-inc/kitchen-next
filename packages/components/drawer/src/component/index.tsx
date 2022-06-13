/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Drawer Federated Micro Component
 */
import { Suspense } from 'react';
import './index.module.css';
import { DrawerProps } from './types';

const Drawer = ({ children, visible, ...props }: DrawerProps) => {


  return <Suspense>
    <span {...props}>

      <div data-component='backdrop:drawer' data-visible={String(visible)} onClick={() => { window.dispatchEvent(new CustomEvent('backdrop.clicked')) }} />
      <div data-component='drawer' data-visible={String(visible)}>
        {children}
      </div>

    </span>
  </Suspense>
}

export default Drawer;




