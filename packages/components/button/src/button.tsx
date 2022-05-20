/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Micro app entry point
 * Context Provider is created with localization, configuration andlogging
 */
import React, { Suspense } from 'react';

type ButtonProps = {
  message?: string
}

const Button = ({message='Doguette la coquette'}:ButtonProps) => <Suspense><button onClick={()=>{alert(message)}}>CHALKUT</button></Suspense>

export default Button;
