/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Suspense } from 'react';
import { DeleteIcon } from './assets';
import './index.module.css';
import { ChipProps } from './types';

const Chip = ({ onRemove, children, onChange, ...props }:ChipProps) => {

  return <Suspense><div data-style={'data:chip:control'} {...props}>{children} {onRemove && <button onClick={onRemove}><DeleteIcon /></button>}</div></Suspense>
}

export default Chip;
