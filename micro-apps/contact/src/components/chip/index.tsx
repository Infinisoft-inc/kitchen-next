/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from 'react';
import { DeleteIcon } from './assets';
import './index.css';
import { ChipProps } from './types';


const Chip = ({ onRemove, children, onChange, ...props }:ChipProps) => {

  return <><div data-style={'data:chip:control'} {...props}>{children} {onRemove && <button onClick={onRemove}><DeleteIcon /></button>}</div></>
}

export default Chip;
