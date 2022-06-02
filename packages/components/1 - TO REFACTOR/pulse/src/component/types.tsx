/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react";

export type MotionDirection = 'vertical' | 'horizontal'

export type PulseProps = {
  direction?: MotionDirection
  children?: React.ReactNode
};
