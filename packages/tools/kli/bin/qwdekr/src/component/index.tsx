/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
import React, { Suspense } from 'react';

const Button = ({ message = 'default', backgroundColor = 'blue', size = 'large', ...props }: ButtonProps) => {
  const style = { backgroundColor, ...buttonPresets[size] }

return <Suspense>
  <input type='text' {...props} />
  <button {...props} style={style} >
    Hello there
  </button>
</Suspense>
}

export default Button;
