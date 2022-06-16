/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React, { startTransition } from 'react';
import css from './index.module.css';
import { ToggleProps } from './types';

/**
 * Toggle buttons
 * @param param0
 * @returns
 */
const Toggle = ({ toggles, clickHandler, children, ...props }: ToggleProps) => {
  const [state, setState] = React.useState('');

  const onClickCapture = (e?: React.MouseEvent<HTMLDivElement>) => {

    startTransition(() => {
      const value = (e?.target as HTMLButtonElement)?.value
      clickHandler(value)
      setState(value)
    })
  }

  const getProps = (value: string) => ({
    className: state === value ? css.baseToggleActive : css.baseToggle,
    key: value,
    value
  })

  return <div className={css.toggleContainer} onClickCapture={onClickCapture}>
    {
      toggles &&
      toggles.map(item => <button {...getProps(item)} {...props}>{item}</button>)
    }
  </div>
}

export default Toggle;
