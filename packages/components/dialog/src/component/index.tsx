/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React, { ForwardedRef, startTransition, Suspense, useCallback, useEffect } from 'react';
import './index.module.css';
import { DialogProps } from './types';

const Dialog = React.forwardRef(({ children, openEvents = [], closeEvents = [], ...props }: DialogProps, ref: ForwardedRef<HTMLSpanElement>) => {
  const [_visible, set_Visible] = React.useState(false);

  const handleOpen = useCallback(() => set_Visible(true), [])
  const handleClose = useCallback(() => set_Visible(false), [])

  useEffect(() => {
    openEvents.forEach(e => window.addEventListener(e, handleOpen))

    return () => { openEvents.forEach(e => window.removeEventListener(e, handleOpen)) }
  }, [handleOpen])

  useEffect(() => {
    closeEvents.forEach(e => window.addEventListener(e, handleClose))

    return () => { closeEvents.forEach(e => window.removeEventListener(e, handleClose)) }
  }, [handleClose])


  /**
   * Captures bubbled click event, set record id on store
   * @param e Event
   */
  const onClickCapture: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    startTransition(() => {
      set_Visible(!Boolean((e.target as HTMLElement).dataset.component?.includes('backdrop')))
    })
  }



  return <Suspense><span {...props} ref={ref} onClickCapture={onClickCapture}>
    <div data-component='backdrop' data-visible={String(_visible)} onClick={() => window.dispatchEvent(new CustomEvent('backdrop.clicked'))} />
    <div data-component='dialog' data-visible={String(_visible)}>
      {children}
    </div>
  </span></Suspense>;
});

export default Dialog
