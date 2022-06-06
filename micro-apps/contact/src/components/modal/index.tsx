/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React, { ForwardedRef } from 'react';
import './index.module.css';
import { ModalProps } from './types';

export const Modal = React.forwardRef(({ children, visible, ...props }: ModalProps, ref: ForwardedRef<HTMLSpanElement>) => {
  return <span {...props} ref={ref}>

    <div data-component='backdrop' data-visible={String(visible)} />
    <div data-component='modal' data-visible={String(visible)}>
      {children}
    </div>

  </span>;
});
