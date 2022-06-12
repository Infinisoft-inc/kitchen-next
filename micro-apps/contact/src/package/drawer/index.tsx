/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React, { ForwardedRef } from 'react';
import './index.module.css';
import { DrawerProps } from './types';

const Drawer = React.forwardRef(({ children, visible, ...props }: DrawerProps, ref: ForwardedRef<HTMLSpanElement>) => {

  return <span {...props} ref={ref}>

    <div data-component='backdrop:drawer' data-visible={String(visible)} onClick={() => { window.dispatchEvent(new CustomEvent('backdrop.clicked')) }} />
    <div data-component='drawer' data-visible={String(visible)}>
      {children}
    </div>

  </span>;
});

export default Drawer