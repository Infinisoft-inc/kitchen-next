/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
import React, { Suspense } from 'react';
import {sizePresets} from './presets/size'
import { ButtonDogProps } from './types';

const ButtonDog = ({ message = 'default', backgroundColor = 'blue', size = 'large', ...props }: ButtonDogProps) => {
  const style = { backgroundColor, ...sizePresets[size] }

return <Suspense>
  <input type='text' {...props} />
  <button {...props} style={style} >
    Hello there
  </button>
</Suspense>
}

export default ButtonDog;
