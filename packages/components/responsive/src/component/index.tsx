/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import css from './index.module.css';
import { ResponsiveProps } from './types';

/**
 * Show/Hide children components
 */

const Responsive = ({ children, showUp }: ResponsiveProps) => {
  return <span className={`${css.responsive} ${css[showUp]}`}>
    {children}
  </span>
}

export default Responsive;
